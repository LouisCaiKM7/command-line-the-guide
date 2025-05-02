'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface CommandDetails {
  id: string;
  name: string;
  description: string;
  manualUrl: string;
  system: 'linux' | 'windows';
  syntax?: string;
  examples?: string[];
  relatedCommands?: string[];
}

export default function CommandPage({ params }: { params: { system: string; command: string } }) {
  const [command, setCommand] = useState<CommandDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/commands/${params.system}/${params.command}`)
      .then(res => res.json())
      .then(data => {
        setCommand(data);
        setLoading(false);
      });
  }, [params.system, params.command]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  if (!command) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700">Command not found</h2>
          <Link href={`/${params.system}`} className="text-blue-500 hover:text-blue-700 mt-4 inline-block">
            Return to {params.system} commands
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Command Header */}
          <div className="border-b pb-6 mb-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">{command.name}</h1>
              <span className={`px-3 py-1 rounded-full text-sm ${
                command.system === 'linux' 
                  ? 'bg-yellow-100 text-yellow-800' 
                  : 'bg-blue-100 text-blue-800'
              }`}>
                {command.system}
              </span>
            </div>
            <p className="text-gray-600 mt-4">{command.description}</p>
          </div>

          {/* Command Syntax */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Syntax</h2>
            <div className="bg-gray-50 p-4 rounded-lg font-mono">
              {command.syntax || `${command.name} [options] [arguments]`}
            </div>
          </div>

          {/* Examples */}
          {command.examples && command.examples.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Examples</h2>
              <div className="space-y-4">
                {command.examples.map((example, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg font-mono">
                    {example}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Commands */}
          {command.relatedCommands && command.relatedCommands.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Related Commands</h2>
              <div className="flex flex-wrap gap-2">
                {command.relatedCommands.map((cmd) => (
                  <Link
                    key={cmd}
                    href={`/${params.system}/${cmd}`}
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm"
                  >
                    {cmd}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Official Documentation Link */}
          <div className="mt-12 pt-6 border-t">
            <a
              href={command.manualUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              <span>View Official Documentation</span>
              <svg 
                className="w-5 h-5 ml-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}