import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CommandLineIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    // Check for user preference
    if (localStorage.theme === 'dark' || 
        (!('theme' in localStorage) && 
         window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);
  
  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setDarkMode(true);
    }
  };
  
  return (
    <nav className="bg-white shadow-md dark:bg-slate-900 dark:border-b dark:border-slate-800">
      <div className="container-custom">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <CommandLineIcon className="h-8 w-8 text-blue-500 dark:text-blue-400" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                Command Line Guide
              </span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex space-x-4">
              <NavLink href="/" label="Home" active={pathname === '/'} />
              <NavLink href="/windows" label="Windows" active={pathname === '/windows'} />
              <NavLink href="/linux" label="Linux" active={pathname === '/linux'} />
            </div>
            
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-800"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <SunIcon className="h-5 w-5 text-yellow-400" />
              ) : (
                <MoonIcon className="h-5 w-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu - shown below md breakpoint */}
      <div className="md:hidden border-t border-gray-200 dark:border-slate-800">
        <div className="container-custom py-2">
          <div className="flex justify-between space-x-2">
            <NavLink href="/" label="Home" active={pathname === '/'} mobile />
            <NavLink href="/windows" label="Windows" active={pathname === '/windows'} mobile />
            <NavLink href="/linux" label="Linux" active={pathname === '/linux'} mobile />
          </div>
        </div>
      </div>
    </nav>
  );
}

interface NavLinkProps {
  href: string;
  label: string;
  active: boolean;
  mobile?: boolean;
}

function NavLink({ href, label, active, mobile = false }: NavLinkProps) {
  const baseClasses = "font-medium transition-colors";
  const desktopClasses = active
    ? "text-blue-600 dark:text-blue-400"
    : "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400";
  const mobileClasses = active
    ? "text-blue-600 dark:text-blue-400 flex-1 text-center py-2 border-b-2 border-blue-500"
    : "text-gray-600 dark:text-gray-300 flex-1 text-center py-2";
    
  return (
    <Link 
      href={href} 
      className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}
    >
      {label}
    </Link>
  );
}