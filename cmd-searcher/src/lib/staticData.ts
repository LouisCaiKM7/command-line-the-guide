import fs from 'fs';
import path from 'path';

let commandsCache: any[] | null = null;

export function getStaticCommands() {
  if (commandsCache) return commandsCache;
  
  try {
    // In development, read from the file
    if (process.env.NODE_ENV === 'development') {
      const filePath = path.join(process.cwd(), 'public', 'data', 'commands.json');
      const fileContents = fs.readFileSync(filePath, 'utf8');
      commandsCache = JSON.parse(fileContents);
      return commandsCache;
    }
    
    // In production (static export), import the JSON directly
    const commands = require('../../public/data/commands.json');
    commandsCache = commands;
    return commands;
  } catch (error) {
    console.error('Error loading static commands:', error);
    return [];
  }
}