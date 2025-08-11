'use client'
import { useEffect } from 'react';
import useFluidCursor from '../hooks/useFluidCursor';

export default function FluidCursor() {
  useEffect(() => {
    const timer = setTimeout(() => {
      useFluidCursor();
    }, 100); // Small delay to ensure DOM is ready

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='fixed top-0 left-0 z-50 pointer-events-none'>
      <canvas id='fluid' className='w-screen h-screen' />
    </div>
  );
}
