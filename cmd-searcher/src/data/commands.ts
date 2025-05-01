export interface CommandDetails {
  id: string;
  name: string;
  description: string;
  manualUrl: string;
  system: 'linux' | 'windows';
  syntax?: string;
  examples?: string[];
  relatedCommands?: string[];
}

export const commands: CommandDetails[] = [
  // Linux commands
  {
    id: 'ls',
    name: 'ls',
    description: 'List directory contents',
    manualUrl: 'https://man7.org/linux/man-pages/man1/ls.1.html',
    system: 'linux',
    syntax: 'ls [OPTION]... [FILE]...',
    examples: [
      'ls -la',
      'ls -lh /usr/bin',
      'ls --color=auto'
    ],
    relatedCommands: ['cd', 'pwd', 'find']
  },
  {
    id: 'cd',
    name: 'cd',
    description: 'Change the current directory',
    manualUrl: 'https://man7.org/linux/man-pages/man1/cd.1p.html',
    system: 'linux',
    syntax: 'cd [directory]',
    examples: [
      'cd /home/user',
      'cd ..',
      'cd ~'
    ],
    relatedCommands: ['ls', 'pwd', 'mkdir']
  },
  
  // Windows commands
  {
    id: 'dir',
    name: 'dir',
    description: 'Display a list of files and subdirectories in a directory',
    manualUrl: 'https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/dir',
    system: 'windows',
    syntax: 'dir [drive:][path][filename] [/a[[:]attributes]] [/b] [/c] [/d] [/l] [/n] [/o[[:]sortorder]] [/p] [/q] [/r] [/s] [/t[[:]timefield]] [/w] [/x] [/4]',
    examples: [
      'dir',
      'dir /a:h',
      'dir /s /b *.txt'
    ],
    relatedCommands: ['cd', 'type', 'copy']
  },
  {
    id: 'cd',
    name: 'cd',
    description: 'Change the current directory or display the current directory path',
    manualUrl: 'https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/cd',
    system: 'windows',
    syntax: 'cd [/d] [drive:][path]',
    examples: [
      'cd C:\\Users',
      'cd ..',
      'cd /d D:\\Projects'
    ],
    relatedCommands: ['dir', 'mkdir', 'rmdir']
  }
  // Add more commands as needed
];

export function getCommandsBySystem(system: string): CommandDetails[] {
  return commands.filter(cmd => cmd.system === system);
}

export function getCommandBySystemAndId(system: string, id: string): CommandDetails | undefined {
  return commands.find(cmd => cmd.system === system && cmd.id === id);
}