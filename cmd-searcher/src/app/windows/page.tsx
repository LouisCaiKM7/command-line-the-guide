'use client';
import { useEffect, useState } from 'react';
import CommandList from '@/components/CommandList';
import CategoryNav from '@/components/CategoryNav';

export default function WindowsPage() {
  const [commands, setCommands] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    // Fetch commands from static JSON file
    fetch('/data/commands.json')
      .then(res => res.json())
      .then(data => {
        // Filter for Windows commands
        const windowsCommands = data.filter((cmd: { system: string }) => cmd.system === 'windows');
        setCommands(windowsCommands);
      })
      .catch(err => console.error('Error loading commands:', err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-3">
            <CategoryNav 
              system="windows" 
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          </div>
          <div className="col-span-9">
            <h1 className="text-3xl font-bold mb-6">Windows Commands</h1>
            <p className="text-gray-600 mb-8">
              Comprehensive documentation for Windows commands and utilities.
            </p>
            <CommandList 
              commands={commands} 
              system="windows"
              activeCategory={activeCategory}
            />
          </div>
        </div>
      </div>
    </div>
  );
}