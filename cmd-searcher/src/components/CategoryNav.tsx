'use client';

interface CategoryNavProps {
  system: 'linux' | 'windows';
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function CategoryNav({ 
  system, 
  activeCategory, 
  setActiveCategory 
}: CategoryNavProps) {
  const categories = system === 'linux' 
    ? [
        { id: 'user', name: 'User Commands' },
        { id: 'system', name: 'System Calls' },
        { id: 'library', name: 'Library Functions' },
        { id: 'special', name: 'Special Files' },
        { id: 'formats', name: 'File Formats' },
        { id: 'games', name: 'Games' },
        { id: 'misc', name: 'Miscellaneous' },
        { id: 'admin', name: 'System Administration' },
      ]
    : [
        { id: 'file', name: 'File Management' },
        { id: 'dir', name: 'Directory Operations' },
        { id: 'system', name: 'System Information' },
        { id: 'network', name: 'Network Commands' },
        { id: 'process', name: 'Process Management' },
        { id: 'user', name: 'User Management' },
        { id: 'device', name: 'Device Management' },
      ];

  return (
    <nav className="bg-white rounded-lg shadow p-4 sticky top-4">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <ul className="space-y-2">
        <li>
          <button
            onClick={() => setActiveCategory('all')}
            className={`w-full text-left px-3 py-2 rounded ${
              activeCategory === 'all' 
                ? 'bg-blue-50 text-blue-700' 
                : 'hover:bg-gray-100 text-gray-700'
            }`}
          >
            All Commands
          </button>
        </li>
        {categories.map(category => (
          <li key={category.id}>
            <button
              onClick={() => setActiveCategory(category.id)}
              className={`w-full text-left px-3 py-2 rounded ${
                activeCategory === category.id 
                  ? 'bg-blue-50 text-blue-700' 
                  : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}