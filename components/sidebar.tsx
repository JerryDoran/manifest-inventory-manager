// import { UserButton } from '@stackframe/stack';
import { BarChart3, Package, Plus } from 'lucide-react';
import Link from 'next/link';

export default function Sidebar({
  currentPath = '/dashboard',
}: {
  currentPath?: string;
}) {
  const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: BarChart3 },
    { name: 'Inventory', href: '/inventory', icon: Package },
    { name: 'Add Product', href: '/product/new', icon: Plus },
    // { name: 'Settings', href: '/settings', icon: Settings },
  ];

  return (
    <div className='fixed left-0 top-0 bg-neutral-900 text-white w-64 min-h-screen p-6 z-10'>
      <div className='mb-8'>
        <div className='flex items-center space-x-2 mb-4'>
          <BarChart3 className='size-8 text-amber-500' />
          <span className='text-2xl font-semibold bg-linear-to-r from-amber-300 via-amber-500 to-orange-700 text-transparent bg-clip-text'>
            Manifest
          </span>
        </div>
      </div>
      <nav className='space-y-1'>
        <div className='text-xs font-semibold text-gray-400 uppercase'>
          Inventory
        </div>
        {navItems.map((item) => {
          const isActive = currentPath === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`group flex items-center rounded-md px-3 py-2 text-sm font-medium ${
                isActive
                  ? 'bg-amber-700 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <item.icon
                className={`mr-3 size-4 shrink-0 ${
                  isActive
                    ? 'text-white'
                    : 'text-gray-400 group-hover:text-white'
                }`}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>
      {/* <div className='absolute bottom-0 right-0 left-0 p-6 border-t border-gray-800'>
        <div className='flex items-center justify-between'>
          <UserButton showUserInfo />
        </div>
      </div> */}
    </div>
  );
}
