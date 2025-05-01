import Link from 'next/link';
import Image from 'next/image';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container-custom">
        <div className="h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <li><a href="/command-line-the-guide/">
            <div className="flex-shrink-0 flex items-center gap-2">
            
                <Image
                src="/logo.png"
                alt="CMD Guide"
                width={24}
                height={24}
                className="rounded"
                />
                <span className="font-semibold text-lg text-gray-800">CMD Guide</span>
            </div>
          </a></li>

          {/* Search Bar */}
          <div className="flex-grow max-w-2xl">
            <SearchBar isNavbar={true} />
          </div>

          {/* Navigation Links */}
          <div className="flex-shrink-0 flex items-center gap-6">
            <Link 
              href="/linux" 
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Image src="/linux-icon.png" alt="Linux" width={16} height={16} />
              <span className="text-sm">Linux</span>
            </Link>

            <Link 
              href="/windows" 
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Image src="/windows-icon.png" alt="Windows" width={16} height={16} />
              <span className="text-sm">Windows</span>
            </Link>

            <Link 
              href="https://github.com/lousicaikm7/command-line-the-guide"
              target="_blank"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Image src="/github-icon.png" alt="GitHub" width={20} height={20} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;