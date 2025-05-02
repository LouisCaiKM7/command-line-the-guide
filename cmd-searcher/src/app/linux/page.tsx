'use client';
import { useEffect, useState } from 'react';
import CommandList from '@/components/CommandList';
import CategoryNav from '@/components/CategoryNav';

export default function LinuxPage() {
  const [commands, setCommands] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    fetch('/api/commands?system=linux')
      .then(res => res.json())
      .then(data => setCommands(data));
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