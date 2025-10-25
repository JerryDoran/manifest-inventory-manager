import Sidebar from '@/components/sidebar';
import {
  getAllProducts,
  getLowStockProducts,
  getRecentProducts,
  getTotalProducts,
} from '@/data/inventory';
import { getCurrentUser } from '@/lib/auth';
import { get } from 'http';
import { TrendingUp } from 'lucide-react';

export default async function DashboardPage() {
  const user = await getCurrentUser();
  const userId = user.id;
  const totalProducts = await getTotalProducts(userId);
  const lowStockProducts = await getLowStockProducts(userId);
  const recentProducts = await getRecentProducts(userId);

  const allProducts = await getAllProducts(userId);

  const totalValue = allProducts.reduce(
    (acc, product) => acc + Number(product.price) * product.quantity,
    0
  );

  return (
    <div className='min-h-screen'>
      <Sidebar currentPath='/dashboard' />
      <main className='ml-64 p-8'>
        {/* Header Section */}
        <div className='mb-8'>
          <div className='flex items-center justify-between'>
            <div>
              <h1 className='text-2xl font-bold text-gray-100'>Dashboard</h1>
              <p className='text-sm text-gray-400'>
                Welcome back! This is your inventory dashboard.
              </p>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <h2 className='text-xl font-semibold text-gray-300 mb-4'>
          Key Inventory Metrics
        </h2>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-3 mb-8'>
          <div className='rounded-lg bg-gray-800 p-6'>
            <div className='flex items-center flex-col gap-6'>
              {/* Total Products */}
              <div className='text-center'>
                <p className='my-2 text-6xl font-bold text-white'>
                  {totalProducts}
                </p>
                <div className='text-xs text-gray-400'>Total Products</div>
                <div className='flex items-center justify-center text-green-500 mt-1'>
                  <span className='text-xs'>+{totalProducts}</span>
                  <TrendingUp className='size-4 ml-1 text-green-500' />
                </div>
              </div>
            </div>
          </div>

          {/* Total Inventory Value */}
          <div className='rounded-lg bg-gray-800 p-6'>
            <div className='flex items-center flex-col gap-6'>
              <div className='text-center'>
                <p className='my-2 text-6xl font-bold text-white'>
                  $
                  {totalValue.toLocaleString('en-US', {
                    maximumFractionDigits: 0,
                  })}
                </p>
                <div className='text-xs text-gray-400'>
                  Total Inventory Value
                </div>
                <div className='flex items-center justify-center text-green-500 mt-1'>
                  <span className='text-xs'>
                    +$
                    {totalValue.toLocaleString('en-US', {
                      maximumFractionDigits: 0,
                    })}
                  </span>
                  <TrendingUp className='size-4 ml-1 text-green-500' />
                </div>
              </div>
            </div>
          </div>

          {/* Low Stock Products */}
          <div className='rounded-lg bg-gray-800 p-6'>
            <div className='flex items-center flex-col gap-6'>
              <div className='text-center'>
                <p className='my-2 text-6xl font-bold text-white'>
                  {lowStockProducts}
                </p>
                <div className='text-xs text-gray-400'>Low Stock Products</div>
                <div className='flex items-center justify-center text-green-500 mt-1'>
                  <span className='text-xs'>+{lowStockProducts}</span>
                  <TrendingUp className='size-4 ml-1 text-green-500' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
