import { deleteProduct } from '@/actions/products';
import Pagination from '@/components/pagination';
import Sidebar from '@/components/sidebar';
import { getCurrentUser } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { Search, Trash2 } from 'lucide-react';

type SearchParams = Promise<{
  q?: string;
  page?: string;
}>;

export default async function InventoryPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const q = params?.q?.trim() || '';
  const page = params?.page ? Number(params.page) : 1;

  const user = await getCurrentUser();
  const userId = user.id;
  const pageSize = 8;
  const currentPage = Math.max(1, Number(params.page ?? 1));

  const where = {
    userId,
    ...(q ? { contains: q, mode: 'insensitive' } : {}),
  };

  const totalProducts = await prisma.product.findMany({
    where,
  });

  const [totalProductCount, items] = await Promise.all([
    prisma.product.count({ where }),
    prisma.product.findMany({
      where,
      orderBy: {
        createdAt: 'desc',
      },
      skip: (Number(page ?? 1) - 1) * pageSize,
      take: pageSize,
    }),
  ]);

  const totalPages = Math.max(1, Math.ceil(totalProductCount / pageSize));

  return (
    <div className='min-h-dvh'>
      <Sidebar currentPath='/inventory' />
      <main className='ml-64 p-8'>
        <header className='mb-8'>
          <div className='flex items-center justify-between'>
            <div>
              <h1 className='text-2xl font-semibold text-gray-200'>
                Inventory
              </h1>
              <p className='text-gray-400 text-sm'>
                Manage your products and track inventory levels
              </p>
            </div>
          </div>
        </header>
        <section className='space-y-6'>
          {/* Search */}
          <div className='bg-zinc-900 rounded-lg py-4 px-6 border border-zinc-700'>
            <form
              className='flex gap-4 items-center'
              action='/inventory'
              method='GET'
            >
              <Search className='size-5 text-gray-400' />
              <input
                type='text'
                name='q'
                placeholder='Search products...'
                className='w-full outline-none focus:border-0 focus:ring-0 bg-zinc-900 text-gray-300'
              />
              <button className='px-6 py-2 bg-zinc-800 rounded-xl hover:bg-zinc-700 transition-colors cursor-pointer'>
                Search
              </button>
            </form>
          </div>

          {/* Products table */}
          <div className='bg-zinc-900 rounded-lg border border-zinc-700 overflow-hidden'>
            <table className='w-full'>
              <thead className='bg-zinc-800'>
                <tr>
                  <th className='text-left px-6 py-3 text-xs font-semibold uppercase text-zinc-300'>
                    Product
                  </th>
                  <th className='text-left px-6 py-3 text-xs font-semibold uppercase text-zinc-300'>
                    SKU
                  </th>
                  <th className='text-left px-6 py-3 text-xs font-semibold uppercase text-zinc-300'>
                    Price
                  </th>
                  <th className='text-left px-6 py-3 text-xs font-semibold uppercase text-zinc-300'>
                    Quantity
                  </th>
                  <th className='text-left px-6 py-3 text-xs font-semibold uppercase text-zinc-300'>
                    Low Stock At
                  </th>
                  <th className='text-left px-6 py-3 text-xs font-semibold uppercase text-zinc-300'>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className='bg-zinc-900 divide-y divide-zinc-700'>
                {items.map((product) => (
                  <tr key={product.id} className='hover:bg-zinc-800'>
                    <td className='px-6 py-2 text-left text-sm  text-zinc-300 whitespace-nowrap'>
                      {product.name}
                    </td>
                    <td className='px-6 py-2 text-left text-sm  text-zinc-300 whitespace-nowrap'>
                      {product.sku || '-'}
                    </td>
                    <td className='px-6 py-2 text-left text-sm  text-zinc-300 whitespace-nowrap'>
                      {Number(product.price).toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      })}
                    </td>
                    <td className='px-6 py-2 text-left text-sm  text-zinc-300 whitespace-nowrap'>
                      {product.quantity}
                    </td>
                    <td className='px-6 py-2 text-left text-sm  text-zinc-300 whitespace-nowrap'>
                      {product.lowStockAt || '-'}
                    </td>
                    <td className='px-6 py-2 text-left text-sm  text-zinc-300 whitespace-nowrap'>
                      <form
                        action={async (formData: FormData) => {
                          'use server';
                          await deleteProduct(formData);
                        }}
                      >
                        <input type='hidden' name='id' value={product.id} />
                        <button className='text-red-600 hover:text-red-800  transition-colors px-4 py-2 rounded-md cursor-pointer'>
                          <Trash2 className='size-4' />
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          {totalPages > 1 && (
            <div className='bg-zinc-800 py-4 px-6 rounded-lg border border-zinc-700'>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                baseUrl='/inventory'
                searchParams={{
                  q,
                  pageSize: String(pageSize),
                }}
              />
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
