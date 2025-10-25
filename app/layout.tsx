import type { Metadata } from 'next';
import { StackProvider, StackTheme } from '@stackframe/stack';
import { stackClientApp } from '../stack/client';
import { Geist, Geist_Mono } from 'next/font/google';
// @ts-expect-error - allow importing CSS as a side-effect in Next.js with TypeScript
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Manifest Inventory Manager',
  description:
    'A modern inventory management app for tracking stock, locations, and movements in real time. Manage products, scan barcodes, perform batch updates, and view analytics to optimize stock levels and reduce shrinkage.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StackProvider app={stackClientApp}>
          <StackTheme>{children}</StackTheme>
        </StackProvider>
      </body>
    </html>
  );
}
