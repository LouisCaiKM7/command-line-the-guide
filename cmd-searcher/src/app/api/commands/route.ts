import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const system = searchParams.get('system');

  try {
    const commands = await prisma.command.findMany({
      where: {
        system: system as 'linux' | 'windows'
      },
      orderBy: {
        name: 'asc'
      }
    });

    return NextResponse.json(commands);
  } catch (error) {
    console.error('Error fetching commands:', error);
    return NextResponse.json({ error: 'Failed to fetch commands' }, { status: 500 });
  }
}