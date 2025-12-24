export default function ProductEfficiency({
  inStockPercentage,
  outOfStockPercentage,
  lowStockPercentage,
}: {
  inStockPercentage: number;
  outOfStockPercentage: number;
  lowStockPercentage: number;
}) {
  return (
    <div className='bg-zinc-900 rounded-lg p-6'>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-xl font-semibold text-gray-300 mb-4'>
          Product Efficiency
        </h2>
      </div>
      <div className='flex items-center justify-center'>
        <div className='relative w-48 h-48'>
          <div className='absolute inset-0 rounded-full border-8 border-gray-300' />
          <div
            className='absolute inset-0 rounded-full border-8 border-purple-600'
            style={{
              clipPath:
                'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50%)',
            }}
          />
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='text-center'>
              <div className='text-2xl font-bold text-gray-300'>
                {inStockPercentage}%
              </div>
              <div className='text-sm text-gray-400'>In Stock</div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-6 space-y-2'>
        <div className='flex items-center justify-between text-sm text-gray-400'>
          <div className='flex items-center space-x-2'>
            <div className='size-3 rounded-full bg-indigo-300' />
            <span>In Stock ({inStockPercentage}%)</span>
          </div>
        </div>
        <div className='flex items-center justify-between text-sm text-gray-400'>
          <div className='flex items-center space-x-2'>
            <div className='size-3 rounded-full bg-indigo-400' />
            <span>Low Stock ({lowStockPercentage}%)</span>
          </div>
        </div>
        <div className='flex items-center justify-between text-sm text-gray-400'>
          <div className='flex items-center space-x-2'>
            <div className='size-3 rounded-full bg-indigo-500' />
            <span>Out of Stock ({outOfStockPercentage}%)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
