import KeyMetrics from '@/components/dashboard/key-metrics';
import StockLevels from '@/components/dashboard/stock-levels';
import Sidebar from '@/components/sidebar';
import {
  getAllProducts,
  getLowStockProducts,
  getRecentProducts,
  getTotalProducts,
} from '@/data/inventory';
import { getCurrentUser } from '@/lib/auth';

export default async function DashboardPage() {
  const user = await getCurrentUser();
  const userId = user.id;

  const [totalProducts, lowStockProducts, allProducts] = await Promise.all([
    getTotalProducts(userId),
    getLowStockProducts(userId),
    getAllProducts(userId),
  ]);

  // const totalProducts = await getTotalProducts(userId);
  // const lowStockProducts = await getLowStockProducts(userId);
  const recentProducts = await getRecentProducts(userId);

  // const allProducts = await getAllProducts(userId);

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
        <KeyMetrics
          totalProducts={totalProducts}
          totalValue={totalValue}
          lowStockProducts={lowStockProducts}
        />

        <StockLevels recentProducts={recentProducts} />
      </main>
    </div>
  );
}
