'use client'

export default function TwinklingStars() {
  const generateStars = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random(),
      size: Math.random() * 3 + 1,
    }));
  };

  const stars = generateStars(350);

  return (
    <div className='relative w-full h-screen bg-black overflow-hidden'>
      {stars.map((star) => (
        <div
          key={star.id}
          className='absolute rounded-full bg-white animate-pulse'
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.animationDelay}s`,
            animationDuration: `${Math.random() * 2}s`,
          }}
        ></div>
      ))}
      <style jsx>
        {`
          @keyframes twinkle {
            0%,
            100% {
              opacity: 0.3;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.2);
            }
          }
          .star-twinkle {
            animation: twinkle 4s ease-in-out infinite;
          }
        `}
      </style>
      {Array.from({ length: 20 }, (_, i) => (
        <div
          key={`accent-${i}`}
          className='absolute rounded-ful bg white star-twinkle'
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${3 + Math.random() * 2}px`,
            height: `${3 + Math.random() * 2}px`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        ></div>
      ))}
    </div>
  );
}
