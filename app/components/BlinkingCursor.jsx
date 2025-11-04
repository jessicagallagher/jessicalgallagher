'use client';
import { useState, useEffect } from 'react';

export default function BlinkingCursor() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  });

  return (
    <span
      className={`ml-1 ${
        visible ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-75 font-typewriter text-4xl lg:text-6xl`}
    >
      |
    </span>
  );
}
