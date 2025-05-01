'use client';
import { useState } from 'react';
import Link from 'next/link';

interface Command {
  id: string;
  name: string;
  description: string;
  manualUrl: string;
  system: 'linux' | 'windows';
}

interface CommandListProps {
  commands: Command[];
  system: string;
  activeCategory: string;
}

export default function CommandList({ commands, system, activeCategory }: CommandListProps) {
  const [letter, setLetter] = useState('A');
  const [searchTerm, setSearchTerm] = useState('');
  
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const filteredCommands = commands.filter(cmd => {
    const matchesLetter = cmd.name.toUpperCase().startsWith(letter);
    const matchesSearch = searchTerm === '' || 
      cmd.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cmd.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = true; // Temporarily set to true since category property is not defined in Command interface
    
    return matchesLetter && matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Search within page */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search within commands..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Alphabet Navigation */}
      <div className="flex flex-wrap gap-2 mb-6">
        {alphabet.map(char => (
          <button
            key={char}
            onClick={() => setLetter(char)}
            className={`px-3 py-1 rounded ${
              letter === char 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {char}
          </button>
        ))}
      </div>

      {/* Commands List */}
      <div className="space-y-4">
        {filteredCommands.map(cmd => (
          <div key={cmd.id} className="bg-white p-4 rounded-lg shadow">
            <Link 
              href={`/command-line-the-guide/${system}/${cmd.name}`}
              className="block hover:bg-gray-50"
            >
              <h3 className="text-lg font-semibold text-blue-600">{cmd.name}</h3>
              <p className="text-gray-600 mt-1">{cmd.description}</p>
            </Link>
          </div>
        ))}
      </div>

      {filteredCommands.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No commands found matching your criteria
        </div>
      )}
    </div>
  );
}