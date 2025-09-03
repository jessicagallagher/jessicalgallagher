'use client'
import dynamic from 'next/dynamic';
import { NotFound, FluidCursor } from './components';

const TwinklingStars = dynamic(() => import('./components/TwinklingStars'), {
  ssr: false,
});

export default function NotFoundPage() {
  return (
    <>
      <TwinklingStars />
      <NotFound />
      <FluidCursor />
    </>
  );
}
