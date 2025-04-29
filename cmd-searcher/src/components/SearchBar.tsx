'use client';
import { useState, useEffect } from 'react';
import { useDebounce } from '@/hooks/useDebounce';

interface Command {
  id: string;
  name: string;
  description: string;
  system: 'linux' | 'windows';
  manualUrl: string;
}

interface SearchBarProps {
  isNavbar?: boolean;
}

const SearchBar = ({ isNavbar = false }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [system, setSystem] = useState<'linux' | 'windows' | 'all'>('all');
  const [results, setResults] = useState<Command[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const debouncedSearch = useDebounce(searchTerm, 300);

  useEffect(() => {
    const fetchResults = async () => {
      if (!debouncedSearch.trim()) {
        setResults([]);
        return;
      }

      setIsLoading(true);
      try {
        const systemQuery = system !== 'all' ? `&system=${system}` : '';
        const response = await fetch(`/api/search?q=${encodeURIComponent(debouncedSearch)}${systemQuery}`);
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error('Search error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResults();
  }, [debouncedSearch, system]);

  return (
    <div className="w-full">
      <div className="relative">
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={isNavbar ? "Search commands..." : "Search commands (e.g., 'git clone', 'dir', 'ls')..."}
            className={`w-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 
                     focus:ring-blue-500 focus:border-transparent transition-shadow
                     ${isNavbar ? 'px-3 py-1.5 text-sm rounded-lg' : 'px-5 py-3 text-lg rounded-lg'}`}
          />
          <select
            value={system}
            onChange={(e) => setSystem(e.target.value as 'linux' | 'windows' | 'all')}
            className="px-3 py-2 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All</option>
            <option value="linux">Linux</option>
            <option value="windows">Windows</option>
          </select>
        </div>

        {isLoading && (
          <div className="absolute right-12 top-3">
            <div className="animate-spin h-5 w-5 border-2 border-blue-500 rounded-full border-t-transparent" />
          </div>
        )}

        {results.length > 0 && (
          <div className={`mt-2 absolute w-full bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto z-50 
                        ${isNavbar ? 'top-12' : 'top-16'}`}>
            {results.map((command) => (
              <a
                key={command.id}
                href={command.manualUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 hover:bg-gray-50 border-b last:border-b-0"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">{command.name}</span>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    command.system === 'linux' 
                      ? 'bg-yellow-100 text-yellow-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {command.system}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{command.description}</p>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;