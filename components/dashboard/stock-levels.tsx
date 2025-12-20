import { Decimal } from '@/prisma/generated/prisma/internal/prismaNamespace';

type StockLevelsProps = {
  id: string;
  userId: string;
  name: string;
  sku: string | null;
  price: Decimal;
  quantity: number;
  lowStockAt: number | null;
  createdAt: Date;
  updatedAt: Date;
}[];

type Product = {
  id: string;
  userId: string;
  name: string;
  sku: string | null;
  price: Decimal;
  quantity: number;
  lowStockAt: number | null;
  createdAt: Date;
  updatedAt: Date;
};

export default function StockLevels({
  recentProducts,
}: {
  recentProducts: StockLevelsProps;
}) {
  console.log(recentProducts);
  return (
    <div className='bg-zinc-900 rounded-lg p-6'>
      {/* STOCK LEVELS */}
      {/* <div className=''> */}
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-xl font-semibold text-gray-300 mb-4'>
          Stock Levels
        </h2>
      </div>
      <div className='space-y-3'>
        {recentProducts.map((product: Product) => {
          const stockLevel =
            product.quantity === 0
              ? 0
              : product.quantity <= (product?.lowStockAt || 5)
              ? 1
              : 2;
          const bgColors = ['bg-red-600', 'bg-yellow-600', 'bg-green-600'];
          const textColors = [
            'text-red-600',
            'text-yellow-600',
            'text-green-600',
          ];
          return (
            <div
              key={product.id}
              className='bg-zinc-800 rounded-lg p-4 flex items-center justify-between'
            >
              <div className='flex items-center gap-2'>
                <div
                  className={`size-3 rounded-full ${bgColors[stockLevel]}`}
                />
                <span className='text-sm text-gray-400'>{product.name}</span>
              </div>
              <div>
                <span className={`text-sm ${textColors[stockLevel]}`}>
                  {product.quantity} units
                </span>
              </div>

              {/* <div className='flex items-center'>
                <span className='text-sm text-gray-400 mr-2'>
                  ${product.price.toFixed(2)}
                </span>
              </div> */}
            </div>
          );
        })}
      </div>
      {/* </div> */}
    </div>
  );
}
