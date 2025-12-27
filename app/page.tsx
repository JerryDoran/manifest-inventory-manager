import Link from 'next/link';
// import { stackServerApp } from '@/stack/server';
// import { redirect } from "next/navigation";

export default async function Home() {
  // const user = await stackServerApp.getUser();
  // if (user) {
  //   redirect('/dashboard');
  // }
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center'>
          <h1 className='text-4xl sm:text-6xl font-bold mb-6 bg-linear-to-r from-amber-300 via-amber-500 to-orange-700 text-transparent bg-clip-text pb-2'>
            Manifest Inventory Manager
          </h1>
          <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
            Streamline your inventory tracking with our powerful, easy-to-use
            management system. Track products, monitor stock levels, and gain
            valuable insights.
          </p>
          <div className='flex gap-4 justify-center'>
            {/* <Link
              href='/sign-in'
              className='bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors'
            >
              Sign In
            </Link> */}
            <Link
              href='/dashboard'
              className='text-amber-500 px-8 py-3 rounded-lg font-semibold border-2 border-amber-600 hover:bg-gray-200 transition-colors'
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
