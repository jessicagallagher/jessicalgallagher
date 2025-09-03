'use client';
import { useRouter } from 'next/navigation';
// import { track } from '@vercel/analytics';

export default function GlobalError({ error, reset }) {
  const router = useRouter();

  return (
    <html lang='en'>
      <body className='max-w-full mx-auto p-10'>
        <div className='flex flex-col justify-center pt-40'>
          <div className='text-center'>
            <h2 className='text-2xl md:text-4xl'>Something went wrong!</h2>
          </div>
          <div className='flex justify-center'>
            <button
              onClick={() => {
                router.refresh();
                // track('global error page');
              }}
              className='inline-flex justify-center rounded-md border py-3 px-6 text-base font-semibold shadow-xl text-white hover:bg-white hover:text-black hover:cursor-pointer rounded-3xl'
            >
              Retry
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
