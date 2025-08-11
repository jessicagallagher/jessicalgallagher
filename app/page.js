'use client';
import dynamic from 'next/dynamic';
import { FluidCursor, LandingPage } from './components';

const TwinklingStars = dynamic(() => import('./components/TwinklingStars'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <TwinklingStars />
      <LandingPage />
      <FluidCursor />
    </>
  );
}
