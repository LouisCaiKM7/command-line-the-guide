import fs from 'fs';
import path from 'path';

interface Command {
  id: string;
  name: string;
  description: string;
  system: 'linux' | 'windows';
  manualUrl: string;
}

function parseLinuxCommands(): Command[] {
  const linuxCommands: Command[] = [];
  const detailsPath = path.join('../','../', 'lib', 'linux', 'details');
  
  try {
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
              id: `linux-${name}`,
              name,
              description: description.trim(),
              system: 'linux',
              manualUrl: url
            });
          }
        }
      }
    }
  } catch (error) {
    console.error('Error parsing Linux commands:', error);
  }
  
  return linuxCommands;
}

function parseWindowsCommands(): Command[] {
  const windowsCommands: Command[] = [];
  const detailsPath = path.join('../','../','lib', 'windows', 'details');
  
  try {
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
              id: `windows-${name}`,
              name,
              description: description.trim(),
              system: 'windows',
              manualUrl: url
            });
          }
        }
      }
    }
  } catch (error) {
    console.error('Error parsing Windows commands:', error);
  }
  
  return windowsCommands;
}

function generateStaticData() {
  try {
    // Parse commands
    const linuxCommands = parseLinuxCommands();
    const windowsCommands = parseWindowsCommands();
    const allCommands = [...linuxCommands, ...windowsCommands];
    
    // Create the public/data directory if it doesn't exist
    const dataDir = path.join(process.cwd(), 'public', 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    // Write the commands to a JSON file
    fs.writeFileSync(
      path.join(dataDir, 'commands.json'),
      JSON.stringify(allCommands, null, 2)
    );
    
    console.log(`Successfully generated static data with ${allCommands.length} commands`);
    console.log(`Linux commands: ${linuxCommands.length}`);
    console.log(`Windows commands: ${windowsCommands.length}`);
  } catch (error) {
    console.error('Error generating static data:', error);
  }
}

generateStaticData();