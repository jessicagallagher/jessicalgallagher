'use client'
import { NavBar, Typewriter } from '.'

export default function PortfolioPage() {
  return (
    <>
      <div className='h-screen max-w-full'>
        <NavBar />
        <Typewriter text='Portfolio' delay={100} />
      </div>
    </>
  );
}
