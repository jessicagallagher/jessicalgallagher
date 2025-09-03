'use client'

export default function Button({ buttonText, onClick, type }) {
  return (
    <button type={type} onClick={onClick} className='w-[125] border border-white px-6 py-2 rounded-4xl text-xl hover:bg-white hover:text-black hover:cursor-pointer text-center'>
      {buttonText}
    </button>
  );
}
