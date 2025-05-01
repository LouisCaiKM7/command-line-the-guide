import fs from 'fs';
import path from 'path';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function generateStaticData() {
  try {
    // Get all commands from the database
    const commands = await prisma.command.findMany();
    
    // Create the data directory if it doesn't exist
    const dataDir = path.join(process.cwd(), 'public', 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    // Write the commands to a JSON file
    fs.writeFileSync(
      path.join(dataDir, 'commands.json'),
      JSON.stringify(commands, null, 2)
    );
    
    console.log(`Successfully generated static data with ${commands.length} commands`);
  } catch (error) {
    console.error('Error generating static data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

generateStaticData();