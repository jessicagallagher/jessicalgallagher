'use client';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import { track } from '@vercel/analytics'
import Image from 'next/image';
import { NavBar, Typewriter } from '.';
import { projects, funProjects } from '.././utils/portfolio';

export default function PortfolioPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <>
      <div className='h-screen max-w-full'>
        <NavBar />
        <Typewriter text='Portfolio' delay={100} />
        <div className='h-full max-w-full mx-auto px-2 lg:px-10 my-10'>
          <ul role='list' className='flex flex-col space-y-12 justify-center'>
            {projects.map((project) => (
              <li key={project.name}>
                <div className='space-y-4'>
                  <div>
                    <Image
                      className='rounded-lg object-cover w-1/2 h-full border border-white mx-auto cursor-pointer'
                      src={project.imgUrl}
                      alt={`Screenshot of project: ${project.name}`}
                      priority={true}
                      width={500}
                      height={500}
                      onClick={() => { openModal(project); track(`${project.name} image clicked`); }}
                    />
                  </div>
                  <div className='space-y-2'>
                    <div className='space-y-1 font-semibold leading-6 text-center'>
                      <a href={project.link} target='_blank' rel='noopener' onClick={() => {
                          track(`${project.name} link to project clicked`)
                        }}>
                        <button
                          disabled={project.isDisabled}
                          className={`${
                            project.isDisabled
                              ? 'cursor-not-allowed'
                              : 'cursor-pointer hover:underline'
                          } text-lg md:text-xl `}
                        >
                          {project.name}
                        </button>
                      </a>
                      <p className='font-semibold'>
                        Built with {project.techUsed}
                      </p>
                      <p className='font-medium'>{project.comments}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <Typewriter text='Just for Fun' delay={100} />
          <ul
            role='list'
            className='flex flex-col space-y-12 justify-center pb-10'
          >
            {funProjects.map((project) => (
              <li key={project.name}>
                <div className='space-y-4'>
                  <div>
                    <img
                      className='rounded-lg object-cover w-1/2 h-full border border-white mx-auto cursor-pointer'
                      src={project.imgUrl}
                      alt={`Screenshot of project: ${project.name}`}
                      onClick={() => { openModal(project); track(`${project.name} image clicked`); }}
                    />
                  </div>
                  <div className='space-y-2'>
                    <div className='space-y-1 font-semibold leading-6 text-center mx-24 lg:mx-48'>
                      <a
                        href={project.link}
                        className={`${
                          project.link === '#'
                            ? 'cursor-not-allowed'
                            : 'cursor-pointer'
                        }`}
                        target='_blank'
                        rel='noopener'
                        onClick={() => {
                          track(`${project.name} link to project clicked`)
                        }}
                      >
                        <button className='text-lg md:text-xl hover:underline'>
                          {project.name}
                        </button>
                      </a>
                      <p className='font-semi-bold'>
                        Built with {project.techUsed}
                      </p>
                      <p className='font-medium'>{project.comments}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* modal */}
        {isOpen && (
          <div
            onClick={closeModal}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
            className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4'
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className='relative max-w-4xl max-h-full bg-white rounded-lg shadow-2xl overflow-hidden'
            >
              <button
                onClick={closeModal}
                className='absolute top-4 right-4 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all duration-200 hover:scale-110'
                aria-label='close image'
              >
                <XMarkIcon className='h-6 w-6 cursor-pointer' />
              </button>
              {/* image */}
              {selectedImage && (
                <div className='relative'>
                  <img
                    src={selectedImage.imgUrl.replace(
                      'w=400&h=300',
                      'w=1200&h=900'
                    )}
                    alt='screenshot of project'
                    className='w-full h-auto max-h-[90vh] object-contain'
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
