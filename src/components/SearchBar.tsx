'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
// Replace the import statement with:
import commandsData from '../../public/data/commands.json';

interface SearchBarProps {
  isNavbar?: boolean;
}

interface Command {
  id: string;
  name: string;
  description: string;
  system: string;
  manualUrl: string;
}

export default function SearchBar({ isNavbar = false }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [commands, setCommands] = useState<Command[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (query) {
      const filteredCommands = commandsData.filter((cmd: any) => {
        return cmd.name.toLowerCase().includes(query.toLowerCase()) ||
               cmd.description.toLowerCase().includes(query.toLowerCase());
      }).slice(0, 20);
      setCommands(filteredCommands);
    } else {
      setCommands([]);
    }
  }, [query]);

  return (
    <div className={`relative ${isNavbar ? 'w-full' : ''}`}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search commands..."
        className="w-full p-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      {query && commands.length > 0 && (
        <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg border">
          {commands.map((cmd: any) => (
            <div
              key={cmd.id}
              onClick={() => router.push(`/command-line-the-guide/${cmd.system}/${cmd.name}`)}
              className="p-3 hover:bg-gray-100 cursor-pointer border-b last:border-b-0"
            >
              <div className="font-medium">{cmd.name}</div>
              <div className="text-sm text-gray-600">{cmd.description}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}