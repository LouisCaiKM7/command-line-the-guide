'use client';
import { useState, useEffect } from 'react';
import CommandList from '@/components/CommandList';
import CategoryNav from '@/components/CategoryNav';

export default function WindowsPage() {
  const [commands, setCommands] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    fetch('/api/commands?system=windows')
      .then(res => res.json())
      .then(data => setCommands(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="col-span-3">
            <CategoryNav 
              system="windows"
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          </div>

          {/* Main Content */}
          <div className="col-span-9">
            <h1 className="text-3xl font-bold mb-6">Windows GNU Commands</h1>
            <p className="text-gray-600 mb-8">
              Complete reference for Windows GNU utilities and commands.
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