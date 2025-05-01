import fs from 'fs';
import path from 'path';

let cachedCommands: any[] | null = null;

export function getStaticCommands() {
  if (cachedCommands) {
    return cachedCommands;
  }

  try {
    // In build/server context
    const dataPath = path.join(process.cwd(), 'public', 'data', 'commands.json');
    const jsonData = fs.readFileSync(dataPath, 'utf8');
    cachedCommands = JSON.parse(jsonData);
    return cachedCommands;
  } catch (error) {
    console.error('Error loading static commands:', error);
    return [];
  }
}