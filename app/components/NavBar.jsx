'use client';
import { useState, useEffect, useRef } from 'react';
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
              >
                Home
              </Link>

              <Link
                className={`${
                  pathname === '/about' ? 'underline' : 'hover:underline'
                }`}
                href='/about'
              >
                About
              </Link>
              <Link
                className={`${
                  pathname === '/portfolio' ? 'underline' : 'hover:underline'
                }`}
                href='/portfolio'
              >
                Portfolio
              </Link>
              <Link
                className={`${
                  pathname === '/contact' ? 'underline' : 'hover:underline'
                }`}
                href='/contact'
              >
                Contact
              </Link>
            </div>
          </Disclosure.Panel>
          <div className='hidden md:ml-6 md:flex md:space-x-3 md:justify-end lg:space-x-6 xl:space-x-8 md:px-3 lg:px-6 xl:px-8'>
            <ul className='hidden md:ml-6 md:flex md:space-x-3 lg:space-x-6 xl:space-x-8'>
              <Link
                className={`${
                  pathname === '/' ? 'underline' : 'hover:underline'
                }`}
                href='/'
              >
                Home
              </Link>
              <Link
                className={`${
                  pathname === '/about' ? 'underline' : 'hover:underline'
                }`}
                href='/about'
              >
                About
              </Link>
              <Link
                className={`${
                  pathname === '/portfolio' ? 'underline' : 'hover:underline'
                }`}
                href='/portfolio'
              >
                Portfolio
              </Link>
              <Link
                className={`${
                  pathname === '/contact' ? 'underline' : 'hover:underline'
                }`}
                href='/contact'
              >
                Contact
              </Link>
            </ul>
          </div>
        </>
      )}
    </Disclosure>
  );
}
