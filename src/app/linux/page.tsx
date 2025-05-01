'use client';
import { useEffect, useState } from 'react';
import CommandList from '@/components/CommandList';
import CategoryNav from '@/components/CategoryNav';

interface Command {
  id: string;
  name: string;
  description: string;
  manualUrl: string;
  system: 'linux' | 'windows';
  syntax?: string;
  examples?: string[];
  relatedCommands?: string[];
}

export default function LinuxPage() {
  const [commands, setCommands] = useState<Command[]>([]);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const fetchCommands = async () => {
      try {
        const response = await fetch('/data/commands.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Command[] = await response.json();
        console.log('Fetched data:', data);
        
        if (!Array.isArray(data)) {
          throw new Error('Invalid data format: expected an array');
        }

        const linuxCommands = data.filter((cmd) => cmd.system === 'linux');
        console.log('Filtered Linux commands:', linuxCommands);
        setCommands(linuxCommands);
      } catch (error) {
        console.error('Error loading commands:', error);
        setCommands([]);
      }
    };

    fetchCommands();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-3">
            <CategoryNav 
              system="linux" 
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          </div>
          <div className="col-span-9">
            <h1 className="text-3xl font-bold mb-6">Linux Manual Pages</h1>
            <p className="text-gray-600 mb-8">
              Comprehensive documentation for Linux commands and system calls.
            </p>
            <CommandList 
              commands={commands} 
              system="linux"
              activeCategory={activeCategory}
            />
          </div>
        </div>
      </div>
    </div>
  );
}