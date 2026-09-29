'use client';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { useState, useEffect } from 'react';
import { track } from '@vercel/analytics';
import Image from 'next/image';
import { NavBar, Typewriter } from '.';
import { projects, funProjects } from '.././utils/portfolio';

function ProjectCard({
  project,
  onImageClick,
  useNextImage = false,
  priority = false,
}) {
  const isDisabled = project.isDisabled || project.link === '#';
  const imageClasses =
    'w-full aspect-video object-fill rounded-lg border border-white cursor-pointer';

  return (
    <li className='flex flex-col space-y-4'>
      {useNextImage ? (
        <Image
          className={imageClasses}
          src={project.imgUrl}
          alt={`Screenshot of project: ${project.name}`}
          priority={priority}
          width={1280}
          height={720}
          sizes='(min-width: 768px) 50vw, 100vw'
          onClick={() => onImageClick(project)}
        />
      ) : (
        <img
          className={imageClasses}
          src={project.imgUrl}
          alt={`Screenshot of project: ${project.name}`}
          loading='lazy'
          onClick={() => onImageClick(project)}
        />
      )}
      <div className='space-y-1 font-semibold leading-6 text-center'>
        {isDisabled ? (
          <span className='text-lg md:text-xl cursor-not-allowed'>
            {project.name}
          </span>
        ) : (
          <a
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'
            className='text-lg md:text-xl hover:underline'
            onClick={() => track(`${project.name} link to project clicked`)}
          >
            {project.name}
          </a>
        )}
        <p className='font-semibold'>Built with {project.techUsed}</p>
        <p className='font-medium'>{project.comments}</p>
      </div>
    </li>
  );
}

export default function PortfolioPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (project) => {
    setSelectedImage(project);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
    track(`${project.name} image clicked`);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  // Listen on window so Escape works without the modal needing focus
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const gridClasses =
    'grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12 items-start';

  return (
    <div className='min-h-screen max-w-full'>
      <NavBar />
      {/* Padding matches the navbar: 24px on mobile (hamburger icon), 48px left / 24px right from md up (nav links / social icons) */}
      <div className='px-6 md:pl-12 md:pr-6'>
        <section className='mb-10'>
          <Typewriter text='Portfolio' delay={100} className='py-2 lg:py-10' />
          <ul role='list' className={`${gridClasses} mt-4`}>
            {projects.map((project, i) => (
              <ProjectCard
                key={project.imgUrl}
                project={project}
                onImageClick={openModal}
                useNextImage
                priority={i < 2}
              />
            ))}
          </ul>
        </section>

        <section className='mt-16 mb-10 pb-10'>
          <Typewriter
            text='Just for Fun'
            delay={100}
            className='py-2 lg:py-10'
          />
          <ul role='list' className={`${gridClasses} mt-4`}>
            {funProjects.map((project) => (
              <ProjectCard
                key={project.imgUrl}
                project={project}
                onImageClick={openModal}
              />
            ))}
          </ul>
        </section>
      </div>

      {/* modal */}
      {isOpen && selectedImage && (
        <div
          onClick={closeModal}
          role='dialog'
          aria-modal='true'
          className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4'
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className='relative max-w-4xl max-h-full bg-white rounded-lg shadow-2xl overflow-hidden'
          >
            <button
              onClick={closeModal}
              className='absolute top-4 right-4 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all duration-200 hover:scale-110'
              aria-label='Close image'
              autoFocus
            >
              <XMarkIcon className='h-6 w-6' />
            </button>
            <img
              src={selectedImage.imgUrl.replace('w=400&h=300', 'w=1200&h=900')}
              alt={`Screenshot of project: ${selectedImage.name}`}
              className='w-full h-auto max-h-[90vh] object-contain'
            />
          </div>
        </div>
      )}
    </div>
  );
}
