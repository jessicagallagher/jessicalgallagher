'use client';
import { useState, useEffect, useRef } from 'react';
import { track } from '@vercel/analytics'
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const ref = useRef(null);
  const pathname = usePathname();

  return (
    <Disclosure as='nav' aria-label='dropdown menu'>
      {({ open }) => (
        <>
          <div className='max-w-full mx-auto p-4 lg:p-8'>
            {/* mobile menu */}
            <div ref={ref} className='md:hidden flex items-center'>
              <Disclosure.Button className='inline-flex items-center justify-center p-2 hover:cursor-pointer rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                <span className='sr-only'>Open main menu</span>
                {open ? (
                  <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                ) : (
                  <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                )}
              </Disclosure.Button>
            </div>
          </div>
          <Disclosure.Panel className='md:hidden'>
            <div className='pt-2 pb-3 space-y-1 ml-3 flex flex-col'>
              <Link
                className={`${
                  pathname === '/' ? 'underline' : 'hover:underline'
                }`}
                href='/'
                onClick={() => {
                  track('mobile nav home page link clicked');
                }}
              >
                Home
              </Link>

              <Link
                className={`${
                  pathname === '/about' ? 'underline' : 'hover:underline'
                }`}
                href='/about'
                onClick={() => {
                  track('mobile nav about page link clicked');
                }}
              >
                About
              </Link>
              <Link
                className={`${
                  pathname === '/portfolio' ? 'underline' : 'hover:underline'
                }`}
                href='/portfolio'
                onClick={() => {
                  track('mobile nav portfolio page link clicked');
                }}
              >
                Portfolio
              </Link>
              <Link
                className={`${
                  pathname === '/contact' ? 'underline' : 'hover:underline'
                }`}
                href='/contact'
                onClick={() => {
                  track('mobile nav contact page link clicked');
                }}
              >
                Contact
              </Link>
              <a
                className='hover:underline'
                href='https://github.com/jessicagallagher'
                aria-label='Visit GitHub page'
                onClick={() => {
                  track('mobile nav github link clicked');
                }}
              >
                GitHub
              </a>
              <a
                className='hover:underline'
                href='https://www.linkedin.com/in/jessica-gallagher/'
                aria-label='Visit LinkedIn page'
                onClick={() => {
                  track('mobile nav linkedin link clicked');
                }}
              >
                LinkedIn
              </a>
            </div>
          </Disclosure.Panel>
          {/* regular menu */}
          <div className='flex justify-between items-center'>
            <div className='hidden md:ml-6 md:flex md:items-center md:space-x-3 lg:space-x-6 xl:space-x-8 '>
              <ul className='hidden md:ml-6 md:flex md:space-x-3 lg:space-x-6 xl:space-x-8'>
                <li>
                  <Link
                    className={`${
                      pathname === '/' ? 'underline' : 'hover:underline'
                    }`}
                    href='/'
                    onClick={() => {
                      track('nav home page link clicked');
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      pathname === '/about' ? 'underline' : 'hover:underline'
                    }`}
                    href='/about'
                    onClick={() => {
                      track('nav about page link clicked');
                    }}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      pathname === '/portfolio'
                        ? 'underline'
                        : 'hover:underline'
                    }`}
                    href='/portfolio'
                    onClick={() => {
                      track('nav portfolio page link clicked');
                    }}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      pathname === '/contact' ? 'underline' : 'hover:underline'
                    }`}
                    href='/contact'
                    onClick={() => {
                      track('nav contact page link clicked');
                    }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className='hidden md:mx-6 items-center md:flex md:space-x-3 lg:space-x-6 xl:space-x-8 '>
              <div className='flex justify-start items-center self-center'>
                <a
                  href='https://github.com/jessicagallagher'
                  target='_blank'
                  rel='noopener'
                  aria-label='Visit GitHub page'
                  onClick={() => {
                    track('nav github icon link clicked');
                  }}
                >
                  <div className='h-6 w-6'>
                    <svg fill='#eeeeee' viewBox='0 0 24 24'>
                      <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                    </svg>
                  </div>
                </a>
                <a
                  className='ml-6'
                  href='https://www.linkedin.com/in/jessica-gallagher/'
                  target='_blank'
                  rel='noopener'
                  aria-label='Visit LinkedIn page'
                  onClick={() => {
                    track('nav linkedin icon link clicked');
                  }}
                >
                  <div className='h-6 w-6'>
                    <svg fill='#eeeeee' viewBox='0 0 24 24'>
                      <path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
