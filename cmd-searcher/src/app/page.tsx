import Image from "next/image";
import SearchBar from '@/components/SearchBar';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center">
      <div className="w-full max-w-3xl px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Command Line Guide
          </h1>
          <p className="text-lg text-gray-600">
            Discover and learn command line tools for Linux and Windows
          </p>
        </div>
        
        <div className="w-full">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
