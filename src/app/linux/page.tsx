'use client';
import { useEffect, useState } from 'react';
import CommandList from '@/components/CommandList';
import Image from 'next/image';
import { ChevronRightIcon, CommandLineIcon, FolderIcon, ServerIcon, GlobeAltIcon, CpuChipIcon } from '@heroicons/react/24/outline';

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCommands = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/command-line-the-guide/data/commands.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        if (!Array.isArray(data)) {
          throw new Error('Invalid data format: expected an array');
        }

        const linuxCommands = data.filter((cmd: { system: string }) => cmd.system === 'linux');
        if (linuxCommands.length === 0) {
          console.error('No Linux commands found in data');
        }
        setCommands(linuxCommands);
      } catch (error) {
        console.error('Error loading commands:', error);
        setCommands([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCommands();
  }, []);

  const categories = [
    { id: 'all', name: 'All Commands', icon: CommandLineIcon },
    { id: 'file', name: 'File Operations', icon: FolderIcon },
    { id: 'system', name: 'System', icon: ServerIcon },
    { id: 'network', name: 'Networking', icon: GlobeAltIcon },
    { id: 'process', name: 'Process Management', icon: CpuChipIcon },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Terminal-inspired Header */}
      <div className="bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="terminal-bg"></div>
        </div>
        <div className="container-custom py-16 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-12 h-12 bg-amber-500 rounded-lg p-2 shadow-lg">
              <Image src="/command-line-the-guide/linux-icon.png" alt="Linux" fill className="object-contain p-1" />
            </div>
            <div>
              <div className="text-amber-400 text-sm font-mono mb-1">$ explore --system</div>
              <h1 className="text-3xl md:text-5xl font-bold">Linux Commands</h1>
            </div>
          </div>
          <p className="text-lg max-w-3xl text-gray-300 font-light">
            Comprehensive documentation for Linux commands, utilities, and system calls. 
            Browse or search through our extensive collection to master the command line.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 bg-amber-500 text-gray-900 px-4 py-2 rounded-md font-medium hover:bg-amber-400 transition-colors">
            <span>Get Started</span>
            <ChevronRightIcon className="h-4 w-4" />
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="col-span-12 md:col-span-3 lg:col-span-2">
            <div className="bg-card rounded-lg border border-border p-5 sticky top-20 shadow-sm">
              <h2 className="font-bold text-lg mb-5 text-foreground">Categories</h2>
              <div className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-md transition-all flex items-center gap-3 ${
                        activeCategory === category.id 
                          ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300 font-medium shadow-sm' 
                          : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{category.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Command List */}
          <div className="col-span-12 md:col-span-9 lg:col-span-10">
            <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-foreground">
                {categories.find(c => c.id === activeCategory)?.name || 'All Commands'}
              </h2>
              
              {isLoading ? (
                <div className="flex flex-col justify-center items-center py-16">
                  <div className="terminal-loader mb-4">
                    <div className="terminal-header">
                      <div className="terminal-buttons">
                        <span className="terminal-circle bg-red-500"></span>
                        <span className="terminal-circle bg-yellow-500"></span>
                        <span className="terminal-circle bg-green-500"></span>
                      </div>
                    </div>
                    <div className="terminal-body">
                      <div className="terminal-text">Loading commands...</div>
                      <div className="terminal-cursor"></div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">Fetching command data...</p>
                </div>
              ) : (
                <CommandList 
                  commands={commands} 
                  system="linux"
                  activeCategory={activeCategory}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional CSS for terminal effects */}
      <style jsx>{`
        .terminal-bg {
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
        }
        
        .terminal-loader {
          width: 300px;
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        
        .terminal-header {
          background: #2d3748;
          padding: 8px;
          border-top-left-radius: 6px;
          border-top-right-radius: 6px;
        }
        
        .terminal-buttons {
          display: flex;
          gap: 6px;
        }
        
        .terminal-circle {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        
        .terminal-body {
          background: #1a202c;
          color: #a0aec0;
          font-family: monospace;
          padding: 16px;
          display: flex;
          align-items: center;
          min-height: 80px;
        }
        
        .terminal-text {
          margin-right: 4px;
        }
        
        .terminal-cursor {
          width: 8px;
          height: 18px;
          background: #ecc94b;
          animation: blink 1s infinite;
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
