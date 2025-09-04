'use client';
import { useRouter } from 'next/navigation';
import { track } from '@vercel/analytics'
import { Button } from '.';

export default function NotFound() {
  const router = useRouter();

  return (
    <section className='grid min-h-full place-items-center py-24 sm:py-32'>
      <div className='text-center'>
        <h1 className='text-3xl md:text-4xl'>404</h1>
        <h1 className='mt-4 text-4xl md:text-6xl tracking-tight'>
          Page not found
        </h1>
        <p className='mt-6 text-pretty text-xl'>
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <Button
            buttonText={`Back`}
            onClick={() => {
              router.back();
              track('not found page back button clicked');
            }}
          />
        </div>
      </div>
    </section>
  );
}
