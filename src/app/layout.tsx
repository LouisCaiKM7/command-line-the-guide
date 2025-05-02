import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Command Line Guide - Your CLI Reference',
  description: 'A comprehensive guide to command line tools for Windows and Linux',
  keywords: 'command line, CLI, terminal, Windows, Linux, bash, PowerShell, cmd',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 py-6">
            <div className="container-custom">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
                  © {new Date().getFullYear()} Command Line Guide. All rights reserved.
                </div>
                <div className="flex space-x-6">
                  <a href="https://github.com/louiscaikm7/command-line-the-guide" 
                     className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
                     target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href="#" 
                     className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400">
                    About
                  </a>
                  <a href="#" 
                     className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
