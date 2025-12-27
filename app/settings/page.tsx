// import Sidebar from '@/components/sidebar';
// import { getCurrentUser } from '@/lib/auth';
// import { AccountSettings } from '@stackframe/stack';
// import { redirect } from 'next/navigation';

// export default async function SettingsPage() {
//   const user = await getCurrentUser();
//   if (!user) {
//     redirect('/login');
//   }
//   return (
//     <div className='min-h-dvh'>
//       <Sidebar currentPath='/settings' />
//       <main className='ml-64 p-8'>
//         <header className='mb-8'>
//           <div className='flex items-center justify-between'>
//             <div>
//               <h1 className='text-2xl font-semibold text-gray-200'>Settings</h1>
//               <p className='text-gray-400 text-sm'>
//                 Manage your account settings and preferences.
//               </p>
//             </div>
//           </div>
//         </header>
//         <div className='max-w-6xl'>
//           <div className='bg-zinc-900 rounded-lg p-6 border border-zinc-700 '>
//             <AccountSettings fullPage />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
