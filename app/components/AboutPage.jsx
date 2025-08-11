'use client';
import { NavBar, Typewriter } from '.';

export default function AboutPage() {
  return (
    <>
      <div className='h-screen max-w-full'>
        <NavBar />
          <Typewriter text='Hello, world!' delay={100} />
        <div className='h-full max-w-full mx-auto px-2 lg:px-10'>
          <h3 className='text-lg lg:text-xl text-justify'>
            I'm a Brooklyn, New York-based full stack software engineer with a
            passion for creating user-friendly, engaging, and intuitive
            experiences. I enjoy building websites and web applications that
            solve real-world problems and day-to-day challenges. I work
            extensively with Next.js, Tailwind CSS, Supabase, and Prismic CMS. I
            write clean and easy to maintain code.
          </h3>
          <br />
          <h3 className='text-lg lg:text-xl text-justify'>
            But... I don't just write code all day! I also enjoy reading,
            playing music on the piano, guitar, bass guitar, flute, and piccolo,
            cooking, hanging out with my two cats, Wiz Khatlifa and Max, and running. I'm
            a 7x marathoner and am looking forward to challenging myself to run
            ultra-marathons soon. I'm also a semi-pro napper, with a personal
            best of four naps in one day. As a curious lifetime-learner, I'm
            currently perfecting my Italian.
          </h3>
          <div className='flex flex-col justify-center lg:grid lg:grid-cols-2 mt-10'>
            <div>
              <h3 className='text-lg lg:text-xl text-center lg:text-left'>
                Marathons I've run:
              </h3>
              <ul className='text-base lg:text-lg list-outside pl-4 list-disc'>
                <li>New York City Marathon (New York, New York)</li>
                <li>Big Sur Marathon (Big Sur, California)</li>
                <li>Berlin Marathon (Berlin, Germany)</li>
                <li>Chicago Marathon (Chicago, Illinois)</li>
                <li>Longueuil Marathon (Québec, Canada)</li>
                <li>Philadelphia Marathon (Philadelphia, Pennsylvania)</li>
                <li>Brighton Marathon (Brighton, England)</li>
              </ul>
            </div>
            <div>
              <h3 className='text-lg lg:text-xl text-center lg:text-left mt-10 lg:mt-0'>
                Books I've read this year:
              </h3>
              <ul className='text-base lg:text-lg list-outside pl-4 list-disc'>
                <li>
                  <span className='italic'>Crime and Punishment</span> by Fyodor
                  Dostoyevsky, Translated by Richard Pevear + Larissa
                  Volokhonsky
                </li>
                <li>
                  <span className='italic'>The You You Are</span> by Dr. Ricken
                  Lazlo Hale, PhD (Any <span className='italic'>Severance</span>{' '}
                  fans out there?)
                </li>
                <li>
                  <span className='italic'>Kafka on the Shore</span> by Haruki
                  Murakami
                </li>
                <li>
                  <span className='italic'>The Power Broker</span> by Robert A.
                  Caro
                </li>
                <li>
                  <span className='italic'>
                    A Philosophy of Software Design
                  </span>{' '}
                  by John Ousterhout
                </li>
                <li>
                  <span className='italic'>
                    Il Grande Gatsby (Italian Edition)
                  </span>{' '}
                  by F. Scott Fitzgerald
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
