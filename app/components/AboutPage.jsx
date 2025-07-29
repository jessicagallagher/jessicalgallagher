'use client'
import { NavBar, AboutHero } from '.'

export default function AboutPage() {
  return (
    <>
      <div className='bg-black h-screen max-w-full'>
        <NavBar />
        <AboutHero />
      </div>
    </>
  );
}
