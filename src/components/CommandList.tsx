'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon, CommandLineIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';

interface Command {
  id: string;
  name: string;
  description: string;
  manualUrl: string;
  system: 'linux' | 'windows';
  category?: string;
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
      const matchesCategory = activeCategory === 'all' || 
        (cmd.category && cmd.category === activeCategory);
      
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

  const systemColor = system === 'linux' ? 'amber' : 'blue';

  return (
    <div>
      {/* Search within page */}
      <div className="mb-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Filter commands..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-${systemColor}-500 dark:focus:ring-${systemColor}-400 focus:border-transparent transition-colors`}
          />
        </div>
      </div>

      {/* Alphabet Navigation */}
      <div className="flex flex-wrap gap-2 mb-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        {alphabet.map(char => (
          <button
            key={char}
            onClick={() => setLetter(char)}
            className={`w-8 h-8 flex items-center justify-center rounded-md transition-all duration-200 ${
              letter === char 
                ? `bg-${systemColor}-500 text-white shadow-md`
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
            aria-label={`Filter by letter ${char}`}
          >
            {char}
          </button>
        ))}
      </div>

      {/* Commands List */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {visibleCommands.length > 0 ? (
          visibleCommands.map((cmd) => (
            <motion.div 
              key={cmd.id} 
              variants={item}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-200 border-l-4 border-${systemColor}-500 hover:border-${systemColor}-600 group`}
            >
              <Link 
                href={`/${system}/${cmd.name}`}
                className="block p-6"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <CommandLineIcon className={`h-5 w-5 text-${systemColor}-500 dark:text-${systemColor}-400`} />
                      <h3 className={`text-xl font-mono font-semibold mb-2 text-${systemColor}-600 dark:text-${systemColor}-400`}>
                        {cmd.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 line-clamp-2">{cmd.description}</p>
                    
                    <div className="mt-3 flex items-center">
                      <span className={`text-xs px-2 py-1 rounded-full bg-${systemColor}-100 dark:bg-${systemColor}-900/30 text-${systemColor}-700 dark:text-${systemColor}-300 font-medium`}>
                        {system}
                      </span>
                      {cmd.category && (
                        <span className="ml-2 text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium">
                          {cmd.category}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className={`p-2 rounded-full bg-${systemColor}-100 dark:bg-${systemColor}-900/50 text-${systemColor}-600 dark:text-${systemColor}-300 transform transition-transform group-hover:translate-x-1`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))
        ) : (
          <motion.div 
            variants={item}
            className="col-span-full text-center py-16 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
          >
            <ExclamationCircleIcon className="h-16 w-16 mx-auto text-gray-400" />
            <h3 className="mt-4 text-xl font-medium text-gray-700 dark:text-gray-300">No commands found</h3>
            <p className="mt-2 text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
            <button 
              onClick={() => {setSearchTerm(''); setLetter('A');}}
              className={`mt-4 px-4 py-2 bg-${systemColor}-500 hover:bg-${systemColor}-600 text-white rounded-md transition-colors`}
            >
              Reset filters
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}