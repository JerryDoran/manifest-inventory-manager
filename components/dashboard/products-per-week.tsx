import ProductsChart from '@/components/dashboard/products-chart';
import { getAllProducts } from '@/data/inventory';
import { getCurrentUser } from '@/lib/auth';

export default async function ProductsPerWeek() {
  const user = await getCurrentUser();
  const userId = user.id;

  const allProducts = await getAllProducts(userId);

  const now = new Date();
  const weeklyProductsData = [];

  for (let i = 11; i >= 0; i--) {
    const weekStart = new Date(now);
    weekStart.setDate(weekStart.getDate() - i * 7);
    weekStart.setHours(0, 0, 0, 0);

    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 6);
    weekStart.setHours(23, 59, 59, 999);

    const weekLabel = `${String(weekStart.getMonth() + 1).padStart(
      2,
      '0'
    )}/${String(weekStart.getDate() + 1).padStart(2, '0')}`;

    const weeklyProducts = allProducts.filter((product) => {
      const productDate = new Date(product.createdAt);
      return productDate >= weekStart && productDate <= weekEnd;
    });
    weeklyProductsData.push({
      week: weekLabel,
      products: weeklyProducts.length,
    });
  }

  return (
    <div className='bg-zinc-900 p-4 rounded-lg'>
      <h2 className='text-xl font-semibold text-gray-300 mb-4'>
        New Products Per Week
      </h2>
      <div className='h-48'>
        <ProductsChart data={weeklyProductsData} />
      </div>
    </div>
  );
}
