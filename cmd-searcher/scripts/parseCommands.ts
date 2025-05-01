import fs from 'fs';
import path from 'path';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface Command {
  name: string;
  description: string;
  system: 'linux' | 'windows';
  manualUrl: string;
}

async function parseLinuxCommands(): Promise<Command[]> {
  const linuxCommands: Command[] = [];
  // Use relative path instead of absolute path
  const detailsPath = path.join('..', 'lib', 'linux', 'details');
  
  const files = fs.readdirSync(detailsPath);
  
  for (const file of files) {
    if (file.startsWith('StartsWith')) {
      const content = fs.readFileSync(path.join(detailsPath, file), 'utf-8');
      const lines = content.split('\n');
      
      for (const line of lines) {
        const match = line.match(/- \[`([^`]+)`\]\(([^)]+)\)(?: - (.+))?/);
        if (match) {
          const [, name, url, description = ''] = match;
          linuxCommands.push({
            name,
            description: description.trim(),
            system: 'linux',
            manualUrl: url
          });
        }
      }
    }
  }
  
  return linuxCommands;
}

async function parseWindowsCommands(): Promise<Command[]> {
  const windowsCommands: Command[] = [];
  // Use relative path instead of absolute path
  const detailsPath = path.join('..', 'lib', 'windows', 'details');
  
  const files = fs.readdirSync(detailsPath);
  
  for (const file of files) {
    if (file.startsWith('StartsWith')) {
      const content = fs.readFileSync(path.join(detailsPath, file), 'utf-8');
      const lines = content.split('\n');
      
      for (const line of lines) {
        const match = line.match(/- \[`([^`]+)`\]\(([^)]+)\)(?: - (.+))?/);
        if (match) {
          const [, name, url, description = ''] = match;
          windowsCommands.push({
            name,
            description: description.trim(),
            system: 'windows',
            manualUrl: url
          });
        }
      }
    }
  }
  
  return windowsCommands;
}

async function populateDatabase() {
  try {
    // Clear existing data
    await prisma.command.deleteMany();
    
    // Parse commands
    const linuxCommands = await parseLinuxCommands();
    const windowsCommands = await parseWindowsCommands();
    const allCommands = [...linuxCommands, ...windowsCommands];
    
    // Insert commands in batches
    for (let i = 0; i < allCommands.length; i += 100) {
      const batch = allCommands.slice(i, i + 100);
      await prisma.command.createMany({
        data: batch
      });
    }
    
    console.log(`Successfully populated database with ${allCommands.length} commands`);
    console.log(`Linux commands: ${linuxCommands.length}`);
    console.log(`Windows commands: ${windowsCommands.length}`);
  } catch (error) {
    console.error('Error populating database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

populateDatabase();