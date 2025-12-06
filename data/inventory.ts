import prisma from '@/lib/prisma';

export async function getTotalProducts(userId: string) {
  const totalProducts = await prisma.product.count({
    where: { userId },
  });
  return totalProducts;
}

export async function getLowStockProducts(userId: string) {
  const lowStockProducts = await prisma.product.count({
    where: {
      userId: userId,
      lowStockAt: { not: null },
      quantity: {
        lte: prisma.product.fields.lowStockAt,
      },
    },
  });
  return lowStockProducts;
}

export async function getAllProducts(userId: string) {
  const products = await prisma.product.findMany({
    where: { userId },
    select: {
      id: true,
      price: true,
      quantity: true,
      createdAt: true,
    },
    orderBy: { createdAt: 'desc' },
  });
  return products;
}

export async function getRecentProducts(userId: string) {
  const products = await prisma.product.findMany({
    where: { userId },
    take: 5,
    orderBy: { createdAt: 'desc' },
  });
  return products;
}

export async function getProductById(userId: string, productId: string) {
  const product = await prisma.product.findFirst({
    where: {
      id: productId,
      userId: userId,
    },
  });
  return product;
}
