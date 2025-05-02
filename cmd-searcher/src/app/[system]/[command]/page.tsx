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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700">Command not found</h2>
          <Link href={`/command-line-the-guide/${params.system}`} className="text-blue-500 hover:text-blue-700 mt-4 inline-block">
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
                    href={`/command-line-the-guide/${params.system}/${cmd}`}
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