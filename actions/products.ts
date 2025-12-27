'use server';

// import { getCurrentUser } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const ProductSchema = z.object({
  name: z.string().min(1, 'Product name is required'),
  quantity: z.coerce.number().int().min(0, 'Quantity cannot be negative'),
  price: z.coerce.number().nonnegative('Price cannot be negative'),
  sku: z.string().optional(),
  lowStockAt: z.coerce.number().int().min(0).optional(),
});

export async function deleteProduct(formData: FormData) {
  // const user = await getCurrentUser();
  const productId = String(formData.get('id') ?? '');

  await prisma.product.deleteMany({
    where: {
      id: productId,
      // userId: user.id,
    },
  });
}

export async function addProduct(formData: FormData) {
  // const user = await getCurrentUser();

  // Form validation
  const parsedData = ProductSchema.safeParse({
    name: formData.get('name') ?? '',
    quantity: formData.get('quantity') ?? 0,
    price: formData.get('price'),
    sku: formData.get('sku'),
    lowStockAt: formData.get('lowStockAt'),
  });

  if (!parsedData.success) {
    const errorMessages = parsedData.error.issues
      .map((issue) => issue.message)
      .join(', ');
    throw new Error(`Validation failed: ${errorMessages}`);
  }

  try {
    await prisma.product.create({
      data: {
        ...parsedData.data,
        // userId: user.id,
      },
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
  redirect('/inventory');
}
