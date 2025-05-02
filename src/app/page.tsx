import SearchBar from '@/components/SearchBar';
import Link from 'next/link';
import { 
  CommandLineIcon, 
  WindowIcon, 
  CodeBracketIcon 
} from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <CommandLineIcon className="h-16 w-16 text-blue-500 dark:text-blue-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Command Line Guide
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Your comprehensive reference for command line tools across Windows and Linux
            </p>
            
            <SearchBar />
            
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/windows" className="btn-primary flex items-center">
                <WindowIcon className="h-5 w-5 mr-2" />
                Windows Commands
              </Link>
              <Link href="/linux" className="btn-primary flex items-center">
                <CodeBracketIcon className="h-5 w-5 mr-2" />
                Linux Commands
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Use Command Line Guide?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Comprehensive Reference"
              description="Detailed explanations and examples for hundreds of commands across different operating systems."
              icon={<CommandLineIcon className="h-8 w-8 text-blue-500 dark:text-blue-400" />}
            />
            <FeatureCard 
              title="System-Specific Guides"
              description="Dedicated sections for Windows and Linux commands with system-specific usage notes."
              icon={<WindowIcon className="h-8 w-8 text-blue-500 dark:text-blue-400" />}
            />
            <FeatureCard 
              title="Practical Examples"
              description="Real-world examples showing how to use commands effectively in your daily workflow."
              icon={<CodeBracketIcon className="h-8 w-8 text-blue-500 dark:text-blue-400" />}
            />
          </div>
        </div>
      </section>
      
      {/* Popular Commands Section */}
      <section className="py-16 bg-gray-50 dark:bg-slate-800">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Popular Commands
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CommandCard 
              name="cd" 
              system="Windows/Linux" 
              description="Change the current directory to the specified location."
              href="/windows/cd"
            />
            <CommandCard 
              name="dir / ls" 
              system="Windows/Linux" 
              description="List files and directories in the current location."
              href="/windows/dir"
            />
            <CommandCard 
              name="mkdir" 
              system="Windows/Linux" 
              description="Create a new directory at the specified location."
              href="/windows/mkdir"
            />
            <CommandCard 
              name="copy / cp" 
              system="Windows/Linux" 
              description="Copy files from one location to another."
              href="/windows/copy"
            />
            <CommandCard 
              name="del / rm" 
              system="Windows/Linux" 
              description="Delete files or directories."
              href="/windows/del"
            />
            <CommandCard 
              name="ipconfig / ifconfig" 
              system="Windows/Linux" 
              description="Display network configuration information."
              href="/windows/ipconfig"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="card p-6">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
}

interface CommandCardProps {
  name: string;
  system: string;
  description: string;
  href: string;
}

function CommandCard({ name, system, description, href }: CommandCardProps) {
  return (
    <Link href={href} className="card hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="command-title">{name}</h3>
          <span className="tag">{system}</span>
        </div>
        <p className="command-description">{description}</p>
      </div>
    </Link>
  );
}
