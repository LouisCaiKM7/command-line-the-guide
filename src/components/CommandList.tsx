'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
  const [visibleCommands, setVisibleCommands] = useState<Command[]>([]);
  
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  useEffect(() => {
    const filtered = commands.filter(cmd => {
      const matchesLetter = cmd.name.toUpperCase().startsWith(letter);
      const matchesSearch = searchTerm === '' || 
        cmd.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cmd.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'all' || true; // Replace with actual category logic when implemented
      
      return matchesLetter && matchesSearch && matchesCategory;
    });
    
    setVisibleCommands(filtered);
  }, [commands, letter, searchTerm, activeCategory]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div>
      {/* Search within page */}
      <div className="mb-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Filter commands..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
          />
        </div>
      </div>

      {/* Alphabet Navigation */}
      <div className="flex flex-wrap gap-2 mb-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
        {alphabet.map(char => (
          <button
            key={char}
            onClick={() => setLetter(char)}
            className={`w-8 h-8 flex items-center justify-center rounded-md transition-all duration-200 ${
              letter === char 
                ? system === 'linux'
                  ? 'bg-amber-500 text-white shadow-md'
                  : 'bg-blue-500 text-white shadow-md'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {char}
          </button>
        ))}
      </div>

      {/* Commands List */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {visibleCommands.map((cmd) => (
          <motion.div 
            key={cmd.id} 
            variants={item}
            className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-200 border-l-4 ${
              system === 'linux' 
                ? 'border-amber-500 hover:border-amber-600' 
                : 'border-blue-500 hover:border-blue-600'
            }`}
          >
            <Link 
              href={`/${system}/${cmd.name}`}
              className="block p-6"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className={`text-xl font-mono font-semibold mb-2 ${
                    system === 'linux' 
                      ? 'text-amber-600 dark:text-amber-400' 
                      : 'text-blue-600 dark:text-blue-400'
                  }`}>
                    {cmd.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{cmd.description}</p>
                </div>
                <div className={`p-2 rounded-full ${
                  system === 'linux' 
                    ? 'bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-300' 
                    : 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300'
                }`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {visibleCommands.length === 0 && (
        <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-xl shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="mt-4 text-xl font-medium text-gray-700 dark:text-gray-300">No commands found</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
}