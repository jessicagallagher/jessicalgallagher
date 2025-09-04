'use client'
import { ContactForm, NavBar, Typewriter } from '.'

export default function ContactPage() {
  return (
    <>
      <div className='h-screen w-full'>
        <NavBar />
        <Typewriter text='Contact' delay={100} />
        <ContactForm />
      </div>
    </>
  );
}
