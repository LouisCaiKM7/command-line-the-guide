import { getStaticCommands } from '@/lib/staticData';
import Link from 'next/link';

// Generate static paths for all commands
export async function generateStaticParams() {
  const commands = getStaticCommands() || [];
  
  // Filter out commands with problematic characters
  return commands
    .filter((command) => {
      // Use a less restrictive regex to allow more characters
      const hasProblematicChars = /[<>:"|?*]/.test(command.name);
      // Allow longer names
      const isTooLong = command.name.length > 5000;
      return !hasProblematicChars && !isTooLong;
    })
    .slice(0, 16000) // Limit to 16000 commands total
    .map((command) => ({
      system: command.system,
      command: command.name,
    }));
}

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

// This is a server component that will be pre-rendered
export default function CommandPage({ params }: { params: { system: string; command: string } }) {
  // Get all commands
  const commands = getStaticCommands() || [];
  
  // Find the specific command
  const command = commands.find(
    (cmd) => cmd.system === params.system && cmd.name === params.command
  ) as CommandDetails | undefined;

  if (!command) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center max-w-md mx-auto p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mt-4">Command not found</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">We couldn't find the command you're looking for.</p>
          <Link href={`/${params.system}`} className="mt-6 inline-block px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors">
            Return to {params.system} commands
          </Link>
        </div>
      </div>
    );
  }

  const isLinux = command.system === 'linux';
  const themeColor = isLinux ? 'amber' : 'blue';

  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          {/* Command Header */}
          <div className={`px-8 py-6 border-b border-gray-200 dark:border-gray-700 bg-${themeColor}-50 dark:bg-${themeColor}-900/20`}>
            <div className="flex items-center justify-between">
              <div>
                <Link 
                  href={`/${params.system}`}
                  className={`text-sm font-medium text-${themeColor}-600 dark:text-${themeColor}-400 hover:underline mb-2 inline-flex items-center`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to {params.system} commands
                </Link>
                <h1 className="text-3xl font-mono font-bold text-gray-800 dark:text-white">{command.name}</h1>
              </div>
              <div className="flex space-x-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium bg-${themeColor}-100 dark:bg-${themeColor}-900 text-${themeColor}-800 dark:text-${themeColor}-200`}>
                  {command.system}
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200">
                  {isLinux ? 'Shell' : 'CMD'}
                </span>
              </div>
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">{command.description}</p>
          </div>

          <div className="p-8">
            {/* Command Cheat Sheet */}
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Quick Reference</h3>
              <div className="space-y-2">
                <div className="flex">
                  <div className="w-1/3 font-medium text-gray-600 dark:text-gray-400">Purpose:</div>
                  <div className="w-2/3 text-gray-800 dark:text-gray-200">{command.description}</div>
                </div>
                <div className="flex">
                  <div className="w-1/3 font-medium text-gray-600 dark:text-gray-400">Common Usage:</div>
                  <div className="w-2/3 text-gray-800 dark:text-gray-200 font-mono">{command.examples?.[0] || command.name}</div>
                </div>
                <div className="flex">
                  <div className="w-1/3 font-medium text-gray-600 dark:text-gray-400">System:</div>
                  <div className="w-2/3 text-gray-800 dark:text-gray-200">{command.system}</div>
                </div>
              </div>
            </div>

            {/* Command Syntax */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 mr-2 text-${themeColor}-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Syntax
              </h2>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-gray-700 relative">
                <div className="flex space-x-2 absolute top-2 left-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="pt-4">
                  <code className="text-gray-200">
                    {command.syntax || `${command.name} [options] [arguments]`}
                  </code>
                </div>
              </div>
            </div>

            {/* Try It Section */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 mr-2 text-${themeColor}-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Try It
              </h2>
              <div className="bg-gray-900 p-4 rounded-lg overflow-hidden border border-gray-700">
                <div className="flex items-center mb-3">
                  <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-gray-400 text-sm font-mono">{isLinux ? 'bash' : 'cmd.exe'}</div>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2 font-mono">$</span>
                  <input 
                    type="text" 
                    className="bg-transparent border-none outline-none text-gray-200 font-mono w-full focus:ring-0"
                    placeholder={`Try ${command.name} with arguments...`}
                  />
                </div>
              </div>
            </div>

            {/* Examples */}
            {command.examples && command.examples.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 mr-2 text-${themeColor}-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  Examples
                </h2>
                <div className="space-y-4">
                  {command.examples.map((example, index) => (
                    <div key={index} className="group relative">
                      <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-gray-700">
                        <code className="text-gray-200">{example}</code>
                      </div>
                      <button 
                        className="absolute top-2 right-2 p-2 bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Copy to clipboard"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Related Commands */}
            {command.relatedCommands && command.relatedCommands.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 mr-2 text-${themeColor}-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                  </svg>
                  Related Commands
                </h2>
                <div className="flex flex-wrap gap-2">
                  {command.relatedCommands.map((cmd) => (
                    <Link
                      key={cmd}
                      href={`/${params.system}/${cmd}`}
                      className={`px-4 py-2 rounded-lg bg-${themeColor}-50 dark:bg-${themeColor}-900/30 text-${themeColor}-700 dark:text-${themeColor}-300 hover:bg-${themeColor}-100 dark:hover:bg-${themeColor}-900/50 transition-colors`}
                    >
                      <code>{cmd}</code>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Official Documentation Link */}
            <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
              <a
                href={command.manualUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-6 py-3 rounded-lg bg-${themeColor}-500 text-white hover:bg-${themeColor}-600 transition-colors`}
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
    </div>
  );
}