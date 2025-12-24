import KeyMetrics from '@/components/dashboard/key-metrics';
import ProductEfficiency from '@/components/dashboard/product-efficiency';
import ProductsPerWeek from '@/components/dashboard/products-per-week';
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

  const inStockCount = allProducts.filter(
    (product) => Number(product.quantity) > 5
  ).length;

  const lowStockCount = allProducts.filter(
    (product) => Number(product.quantity) <= 5 && Number(product.quantity) >= 1
  ).length;

  const outOfStockCount = allProducts.filter(
    (product) => Number(product.quantity) === 0
  ).length;

  // Calculate inStockPercentage
  const inStockPercentage =
    totalProducts > 0 ? Math.round((inStockCount / totalProducts) * 100) : 0;

  const lowStockPercentage =
    totalProducts > 0 ? Math.round((lowStockCount / totalProducts) * 100) : 0;

  const outOfStockPercentage =
    totalProducts > 0 ? Math.round((outOfStockCount / totalProducts) * 100) : 0;

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
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <KeyMetrics
            totalProducts={totalProducts}
            totalValue={totalValue}
            lowStockProducts={lowStockProducts}
          />
          <ProductsPerWeek />
          <StockLevels recentProducts={recentProducts} />
          <ProductEfficiency
            inStockPercentage={inStockPercentage}
            lowStockPercentage={lowStockPercentage}
            outOfStockPercentage={outOfStockPercentage}
          />
        </div>
      </main>
    </div>
  );
}
