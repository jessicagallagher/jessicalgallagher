'use client'
import { useState } from 'react';
import { NavBar, Typewriter } from '.'

export default function PortfolioPage() {
  const [popup, showPopup] = useState(false);

  const projects = [
    {
      name: 'Tech Meowt',
      imgUrl: '',
      techUsed: 'Next.js, Tailwind CSS, Resend, + Setmore',
      link: 'https://www.techmeowt.com',
      comments: 'This website was built and maintained for Tech Meowt.',
      showPopup: false,
    },
    {
      name: 'Southpaw Martial Arts and Fitness Club',
      imgUrl: '',
      techUsed: 'Next.js, Tailwind CSS, + Resend',
      link: 'https://www.southpawmartialarts.com',
      comments:
        'This website was built and maintained for Southpaw Martial Arts and Fitness Club.',
      showPopup: false,
    },
    {
      name: 'Petsitting application',
      imgUrl: '',
      techUsed: 'Next.js, Tailwind CSS, Supabase, Prismic CMS + Mapbox',
      link: '#',
      comments: `This application was built and maintained for a private client and can't be accessed by the public.`,
      showPopup: true,
    },
    {
      name: 'Realtor.com clone',
      imgUrl: '',
      techUsed: 'React, Tailwind CSS, Firebase',
      link: 'https://realtor-clone-tan.vercel.app/',
      comments: 'This is a clone of the Realtor.com website.',
      showPopup: false,
    },
    {
      name: 'Database application',
      imgUrl: '',
      techUsed: 'React, Bootstrap, MongoDB, Express, Prisma ORM, + Nodemailer',
      link: '',
      comments: `This application was built and maintained for a private client and can't be accessed by the public.`,
      showPopup: true,
    },
  ];

  const funProjects = [
    {
      name: 'Google Chrome dinosaur game clone',
      imgUrl: '',
      techUsed: 'Vanilla JavaScript',
      link: 'https://chrome-dino-game-ten.vercel.app/',
      comments:
        'This game is accessible on both web and mobile browsers. Use your spacebar to jump on the web version, and tap to jump on the mobile version.',
    },
    {
      name: 'Tetris clone',
      imgUrl: '',
      techUsed: 'React',
      link: 'https://jess-tetris.vercel.app/',
      comments:
        'This game is accessible on web browsers only. Hold down the arrow key to quickly drop the tetromino, press the left and right arrow keys to position the tetromino, and press the up arrow key to rotate the tetromino.',
    },
  ];

  return (
    <>
      <div className='h-screen max-w-full'>
        <NavBar />
        <Typewriter text='Portfolio' delay={100} />
      </div>
    </>
  );
}
