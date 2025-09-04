'use client';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Button, FluidCursor } from './components';
// import { track } from '@vercel/analytics';

const TwinklingStars = dynamic(() => import('./components/TwinklingStars'), {
  ssr: false,
});

export default function GlobalError({ error, reset }) {
  const router = useRouter();

  return (
    <html lang='en'>
      <body className='max-w-full mx-auto p-10'>
        <TwinklingStars />
        <div className='flex flex-col justify-center pt-40'>
          <div className='text-center'>
            <h2 className='text-2xl md:text-4xl'>Something went wrong!</h2>
          </div>
          <div className='flex justify-center mt-10'>
            <Button
              buttonText={`Retry`}
              onClick={() => {
                router.refresh();
                // track('global error page');
              }}
            />
          </div>
        </div>
        <FluidCursor />
      </body>
    </html>
  );
}
