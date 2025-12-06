import { TrendingUp } from 'lucide-react';

export default function KeyMetrics({
  totalProducts,
  totalValue,
  lowStockProducts,
}: {
  totalProducts: number;
  totalValue: number;
  lowStockProducts: number;
}) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 mb-8 '>
      <div className='bg-zinc-900 p-4 rounded-lg'>
        <h2 className='text-xl font-semibold text-gray-300 mb-4'>
          Key Inventory Metrics
        </h2>
        <div className='flex justify-around gap-4 text-3xl xl:text-6xl'>
          <div className='flex items-center flex-col gap-6'>
            {/* Total Products */}
            <div className='text-center'>
              <p className='my-2 font-bold text-white'>{totalProducts}</p>
              <div className='text-xs text-gray-400'>Total Products</div>
              <div className='flex items-center justify-center text-green-500 mt-1'>
                <span className='text-xs'>+{totalProducts}</span>
                <TrendingUp className='size-4 ml-1 text-green-500' />
              </div>
            </div>
          </div>

          {/* Total Inventory Value */}

          <div className='flex items-center flex-col gap-6'>
            <div className='text-center'>
              <p className='my-2 font-bold text-white'>
                $
                {totalValue.toLocaleString('en-US', {
                  maximumFractionDigits: 0,
                })}
              </p>
              <div className='text-xs text-gray-400'>Total Inventory Value</div>
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

          {/* Low Stock Products */}

          <div className='flex items-center flex-col gap-6'>
            <div className='text-center'>
              <p className='my-2 font-bold text-white'>{lowStockProducts}</p>
              <div className='text-xs text-gray-400'>Low Stock Products</div>
              <div className='flex items-center justify-center text-green-500 mt-1'>
                <span className='text-xs'>+{lowStockProducts}</span>
                <TrendingUp className='size-4 ml-1 text-green-500' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
