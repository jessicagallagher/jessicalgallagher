'use client'
import dynamic from 'next/dynamic';
import { FluidCursor } from './components';

const TwinklingStars = dynamic(() => import('./components/TwinklingStars'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <div className='text-white z-50'>pls fucking work</div>
      <FluidCursor />
      <TwinklingStars />
    </>
  );
}
