import Link from 'next/link';
import { WindowIcon } from '@heroicons/react/24/outline';
import SearchBar from '@/components/SearchBar';

export default function WindowsCommandsPage() {
  return (
    <div className="py-8">
      <div className="container-custom">
        <div className="flex items-center mb-8">
          <WindowIcon className="h-8 w-8 text-blue-500 dark:text-blue-400 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Windows Commands</h1>
        </div>
        
        <div className="mb-8">
          <SearchBar />
        </div>
        
        <div className="grid gap-8">
          {/* File System Commands */}
          <CommandCategory 
            title="File System Commands" 
            description="Commands for navigating and managing files and directories"
          >
            <CommandList commands={[
              { name: 'cd', description: 'Change directory' },
              { name: 'dir', description: 'List directory contents' },
              { name: 'mkdir', description: 'Create a new directory' },
              { name: 'rmdir', description: 'Remove a directory' },
              { name: 'copy', description: 'Copy files' },
              { name: 'move', description: 'Move files' },
              { name: 'del', description: 'Delete files' },
              { name: 'ren', description: 'Rename files' },
              { name: 'type', description: 'Display file contents' },
            ]} />
          </CommandCategory>
          
          {/* Network Commands */}
          <CommandCategory 
            title="Network Commands" 
            description="Commands for network diagnostics and configuration"
          >
            <CommandList commands={[
              { name: 'ipconfig', description: 'Display IP configuration' },
              { name: 'ping', description: 'Test network connectivity' },
              { name: 'tracert', description: 'Trace route to a destination' },
              { name: 'netstat', description: 'Display network statistics' },
              { name: 'nslookup', description: 'Query DNS records' },
              { name: 'route', description: 'View and modify the routing table' },
            ]} />
          </CommandCategory>
          
          {/* System Commands */}
          <CommandCategory 
            title="System Commands" 
            description="Commands for system management and information"
          >
            <CommandList commands={[
              { name: 'systeminfo', description: 'Display system information' },
              { name: 'tasklist', description: 'List running processes' },
              { name: 'taskkill', description: 'Terminate processes' },
              { name: 'sfc', description: 'System file checker' },
              { name: 'chkdsk', description: 'Check disk for errors' },
              { name: 'shutdown', description: 'Shutdown or restart the computer' },
            ]} />
          </CommandCategory>
        </div>
      </div>
    </div>
  );
}

interface CommandCategoryProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

function CommandCategory({ title, description, children }: CommandCategoryProps) {
  return (
    <div className="card">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
      </div>
      {children}
    </div>
  );
}

interface Command {
  name: string;
  description: string;
}

interface CommandListProps {
  commands: Command[];
}

function CommandList({ commands }: CommandListProps) {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {commands.map((command) => (
        <Link 
          key={command.name}
          href={`/windows/${command.name}`}
          className="block p-6 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{command.name}</h3>
              <p className="mt-1 text-gray-600 dark:text-gray-300">{command.description}</p>
            </div>
            <div className="text-blue-500 dark:text-blue-400">→</div>
          </div>
        </Link>
      ))}
    </div>
  );
}