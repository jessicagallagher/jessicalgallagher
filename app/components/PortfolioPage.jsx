'use client';
import { NavBar, Typewriter } from '.';
import { projects, funProjects } from '.././utils/portfolio';

export default function PortfolioPage() {
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
                    <img
                      className='rounded-lg object-cover w-1/2 h-full border border-white mx-auto'
                      src={project.imgUrl}
                      alt={`Screenshot of project: ${project.name}`}
                    />
                  </div>
                  <div className='space-y-2'>
                    <div className='space-y-1 font-semibold leading-6 text-center'>
                      <a
                        href={project.link}
                        target='_blank'
                        rel='noopener'
                      >
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
                      className='rounded-lg object-cover w-1/2 h-full border border-white mx-auto'
                      src={project.imgUrl}
                      alt={`Screenshot of project: ${project.name}`}
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
      </div>
    </>
  );
}
