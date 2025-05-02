'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
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
    <div className="w-full">
      <div className="relative">
        <input
          type="text"
          placeholder="Search commands..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-6 py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg shadow-sm transition-all duration-200 hover:shadow-md focus:shadow-lg"
        />
        {query && (
          <div className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-lg overflow-hidden">
            {commands.length > 0 ? (
              commands.map((cmd) => (
                <Link
                  key={cmd.id}
                  href={`/${cmd.system}/${cmd.name}`}
                  className="block px-6 py-4 hover:bg-gray-50 transition-colors duration-150 border-b last:border-b-0"
                >
                  <div className="font-medium text-gray-800">{cmd.name}</div>
                  <div className="text-sm text-gray-600 mt-1">{cmd.description}</div>
                </Link>
              ))
            ) : (
              <div className="px-6 py-4 text-gray-500">No commands found</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}