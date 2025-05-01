import { NextResponse } from 'next/server';
import { getStaticCommands } from '@/lib/staticData';
import { Prisma, PrismaClient } from '@prisma/client';

interface ScoredCommand {
  command: any;
  score: number;
}

function calculateScore(command: any, searchTerm: string): number {
  const name = command.name.toLowerCase();
  const description = command.description.toLowerCase();
  const search = searchTerm.toLowerCase();
  let score = 0;

  // Exact match in name
  if (name === search) {
    score += 100;
  }
  // Starts with search term
  else if (name.startsWith(search)) {
    score += 80;
  }
  // Contains search term in name
  else if (name.includes(search)) {
    score += 60;
  }
  // Contains search term in description
  if (description.includes(search)) {
    score += 20;
  }

  // Letter sequence matching
  let currentIndex = -1;
  let sequenceScore = 0;
  for (const char of search) {
    const index = name.indexOf(char, currentIndex + 1);
    if (index > currentIndex) {
      sequenceScore += 1;
      currentIndex = index;
    }
  }
  score += (sequenceScore / search.length) * 40;

  // Shorter names get slightly higher priority
  score += (1 / name.length) * 10;

  return score;
}

export async function GET(request: Request) {
  const prisma = new PrismaClient();
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');
  const system = searchParams.get('system');

  if (!query) {
    return NextResponse.json([]);
  }

  try {
    const commands = await prisma.command.findMany({
      where: {
        AND: [
          {
            OR: [
              { name: { contains: query, mode: 'insensitive' } },
              { description: { contains: query, mode: 'insensitive' } },
            ],
          },
          system && system !== 'all' ? { system } : {},
        ],
      },
    });

    // Score and sort results
    const scoredCommands: ScoredCommand[] = commands
      .map((command: any) => ({
        command,
        score: calculateScore(command, query)
      }))
      .sort((a: ScoredCommand, b: ScoredCommand) => b.score - a.score)
      .slice(0, 20);

    return NextResponse.json(scoredCommands.map(sc => sc.command));
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json({ error: 'Search failed' }, { status: 500 });
  }
}