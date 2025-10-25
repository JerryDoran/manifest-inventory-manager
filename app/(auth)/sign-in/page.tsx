import { SignIn } from '@stackframe/stack';
import Link from 'next/link';

export default function SignInPage() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-md w-full space-y-8 border border-neutral-700 p-10 rounded-lg'>
        <SignIn />
        <Link href='/' className='text-sm hover:underline'>
          Back to Home Page
        </Link>
      </div>
    </div>
  );
}
