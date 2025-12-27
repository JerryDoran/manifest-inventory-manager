// import { getCurrentUser } from '@/lib/auth';
// import { redirect } from 'next/navigation';

import Sidebar from '@/components/sidebar';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { addProduct } from '@/actions/products';

export default async function AddProductPage() {
  // const user = await getCurrentUser();
  // if (!user) {
  //   redirect('/login');
  // }
  return (
    <div className='min-h-dvh'>
      <Sidebar currentPath='/product/new' />
      <main className='ml-64 p-8'>
        <header className='mb-8'>
          <div className='flex items-center justify-between'>
            <div>
              <h1 className='text-2xl font-semibold text-gray-200'>
                Add New Products
              </h1>
              <p className='text-gray-400 text-sm'>
                Add new products to your inventory here.
              </p>
            </div>
          </div>
        </header>
        <section className='max-w-2xl'>
          <div className='bg-zinc-900 rounded-lg border border-zinc-800 p-6'>
            <form className='mt-6 space-y-6' action={addProduct}>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-zinc-400'
                >
                  Product Name *
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  required
                  className='w-full px-4 py-2 border border-zinc-700 rounded-lg outline-none bg-zinc-900 text-gray-300 mt-1'
                  placeholder='Enter product name'
                />
              </div>
              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='quantity'
                    className='block text-sm font-medium text-zinc-400'
                  >
                    Quantity *
                  </label>
                  <input
                    type='number'
                    id='quantity'
                    name='quantity'
                    step={1}
                    min={0}
                    required
                    className='w-full px-4 py-2 border border-zinc-700 rounded-lg outline-none bg-zinc-900 text-gray-300 mt-1'
                    placeholder='e.g., 100'
                  />
                </div>
                <div>
                  <label
                    htmlFor='price'
                    className='block text-sm font-medium text-zinc-400'
                  >
                    Price *
                  </label>
                  <input
                    type='number'
                    id='price'
                    name='price'
                    step='0.01'
                    min={0}
                    required
                    className='w-full px-4 py-2 border border-zinc-700 rounded-lg outline-none bg-zinc-900 text-gray-300 mt-1'
                    placeholder='0.00'
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='sku'
                  className='block text-sm font-medium text-zinc-400'
                >
                  SKU
                </label>
                <input
                  type='text'
                  id='sku'
                  name='sku'
                  className='w-full px-4 py-2 border border-zinc-700 rounded-lg outline-none bg-zinc-900 text-gray-300 mt-1'
                  placeholder='SKU number'
                />
              </div>
              <div>
                <label
                  htmlFor='lowStockAt'
                  className='block text-sm font-medium text-zinc-400'
                >
                  Low Stock At *
                </label>
                <input
                  type='number'
                  id='lowStockAt'
                  name='lowStockAt'
                  step='1'
                  min={0}
                  required
                  className='w-full px-4 py-2 border border-zinc-700 rounded-lg outline-none bg-zinc-900 text-gray-300 mt-1'
                  placeholder='Low stock threshold'
                />
              </div>
              <div className='mt-6 flex items-center gap-4'>
                <button
                  type='submit'
                  className='px-4 py-2 bg-amber-700 hover:bg-amber-800 text-white rounded-lg transition-colors duration-200 cursor-pointer flex items-center'
                >
                  <Plus className='size-4 mr-2' />
                  Add Product
                </button>
                <Link
                  href='/inventory'
                  className='px-4 py-2 border border-amber-800 hover:bg-amber-700 text-white rounded-lg transition-colors duration-200 cursor-pointer ml-4'
                >
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
