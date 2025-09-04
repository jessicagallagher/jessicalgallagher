'use client';
import { CSSProperties } from 'react';
import { PacmanLoader } from 'react-spinners';

export default function Loading() {
  const override = {
    margin: '0 auto',
  };

  return (
    <div className='pt-40'>
      <PacmanLoader
        color='#FFFFFF'
        size={50}
        aria-label='Loading Spinner'
        cssOverride={override}
      />
      <h3 className='text-center mt-10 text-white'>Loading...</h3>
    </div>
  );
}
