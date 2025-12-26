// Make sure to import PrismaClient from the folder where it is generated
// this is in the prisma.schema file
// import { PrismaClient } from './generated/prisma/client';

// const prisma = new PrismaClient();

// async function main() {
//   console.log('Creating seed data...');
//   const demoUserId = '4ab2a949-5d39-4bfe-bf02-0f6bd98f3047';

//   // Create sample products
//   await prisma.product.createMany({
//     data: Array.from({ length: 25 }).map((_, i) => ({
//       userId: demoUserId,
//       name: `Product ${i + 1}`,
//       price: (Math.random() * 90 + 10).toFixed(2),
//       quantity: Math.floor(Math.random() * 20),
//       lowStockAt: 5,
//       createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * (i * 5)),
//     })),
//   });

//   console.log('Seed data created successfully!');
//   console.log(`Created 25 products for user ID: ${demoUserId}`);
// }

// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
