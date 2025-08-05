'use client';
import { useState, useEffect } from 'react';
import { BlinkingCursor } from '.';

export default function Typewriter({ text, delay }) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <h1 className='font-roboto p-2 lg:p-10 text-6xl'>
      {currentText}
      <span>
        <BlinkingCursor />
      </span>
    </h1>
  );
}
