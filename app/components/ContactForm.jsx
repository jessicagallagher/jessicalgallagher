'use client';
import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { verifyRecaptcha } from '../actions/recaptcha/verify-recaptcha';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
};

export default function ContactForm() {
  const [clicked, setClicked] = useState(false);
  const [values, setValues] = useState(initialState);
  const [phone, setPhone] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const recaptchaRef = useRef(null);

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
    // clear any existing error messages
    setMessage('');
  };

  const handleRecaptchaExpired = () => {
    setRecaptchaToken(null);
    setMessage('reCAPTCHA expired. Please verify again.');
  };

  const handleRecaptchaError = () => {
    setRecaptchaToken(null);
    setMessage('reCAPTCHA error. Please try again.');
  };

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);
    setMessage('');
    // validate rc
    if (!recaptchaToken) {
      setMessage('Please complete the reCAPTCHA verification');
      setIsSubmitting(false);
      return;
    }

    try {
      // verify rc token
      const verification = await verifyRecaptcha(recaptchaToken);
      if (!verification.success) {
        const errorMessages = {
          'missing-input-secret': 'Server configuration error',
          'invalid-input-secret': 'Server configuration error',
          'missing-input-response': 'Please complete the reCAPTCHA',
          'invalid-input-response': 'Invalid reCAPTCHA response',
          'bad-request': 'Bad request',
          'timeout-or-duplicate': 'reCAPTCHA expired or already used',
        };

        const errorCode = verification.errorCodes[0];
        const errorMessage = errorMessages[errorCode] || 'reCAPTCHA verification failed';
        setMessage(errorMessage);
        setIsSubmitting(false);
        return;
      }

      // process form submission
      console.log(`Form data submitted successfully: ${values}`);
      console.log(`ReCAPTCHA verified successfully`);

      // api call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setMessage('Form submitted successfully!');
      setClicked(true);
      setValues(initialState);
      setPhone('');
      setRecaptchaToken(null);
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    } catch (error) {
      console.error('Submission error:', error);
      setMessage('An error occurred while submitting the form');
    } finally {
      setIsSubmitting(false);
    }
  };

  // format phone number
  const phoneNumberAutoFormat = (phoneNumber) => {
    const number = phoneNumber.trim().replace(/[^0-9]/g, '');
    if (number.length < 4) return number;
    if (number.length < 7) return number.replace(/(\d{3})(\d{1})/, '($1) $2');
    if (number.length < 11)
      return number.replace(/(\d{3})(\d{3})(\d{1})/, '($1) $2-$3');
    return number.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  };

  const handleChange = (e) => {
    const targetValue = phoneNumberAutoFormat(e.target.value);
    setValues({ ...values, [e.target.name]: e.target.value });
    if (e.target.name === 'phone') {
      setPhone(targetValue);
    }
    console.log(values);
  };

  return (
    <div className='h-screen max-w-full'>
      <h2 className='text-3xl lg:text-5xl tracking-tight text-pretty text-center my-10'>
        👋 Get in touch
      </h2>
      <div className='mx-auto max-w-2/3 lg:max-w-1/2 pb-12'>
        <form
          action={handleSubmit}
          className='grid grid-cols-1 gap-y-6 text-white'
        >
          <div>
            <label htmlFor='firstName' className='sr-only'>
              First name
            </label>
            <input
              type='text'
              name='firstName'
              id='firstName'
              autoComplete='given-name'
              className='block w-full rounded-md border border-white py-3 px-4 placeholder-white shadow-sm'
              placeholder='First name'
              required
              value={values.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='lastName' className='sr-only'>
              Last name
            </label>
            <input
              type='text'
              name='lastName'
              id='lastName'
              autoComplete='family-name'
              className='block w-full rounded-md border border-white py-3 px-4 placeholder-white shadow-sm'
              placeholder='Last name'
              required
              value={values.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='email' className='sr-only'>
              Email
            </label>
            <input
              id='email'
              name='email'
              type='email'
              autoComplete='email'
              className='block w-full rounded-md border border-white py-3 px-4 placeholder-white shadow-sm'
              placeholder='Email'
              required
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='phone' className='sr-only'>
              Phone
            </label>
            <input
              type='text'
              name='phone'
              id='phone'
              autoComplete='tel'
              required
              className='block w-full rounded-md border border-white py-3 px-4 placeholder-white shadow-sm'
              placeholder='Phone'
              value={phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='message' className='sr-only'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              rows={10}
              className='block w-full rounded-md border border-white py-3 px-4 placeholder-white shadow-sm'
              placeholder='Message'
              required
              onChange={handleChange}
              value={values.message}
            />
          </div>
          <div className={`${ !clicked ? 'flex justify-start' : 'hidden' }`}>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={handleRecaptchaChange}
              onExpired={handleRecaptchaExpired}
              onError={handleRecaptchaError}
              theme='dark' // or "light"
              size='normal' // or "compact"
            />
          </div>
          {!clicked && (
            <div>
              <button
                type='submit'
                className='cursor-pointer inline-flex justify-center rounded-md border py-3 px-6 text-base font-semibold shadow-xl border-white bg-black text-white hover:border-black hover:bg-white hover:text-black rounded-3xl'
              >
                Submit
              </button>
            </div>
          )}
          {clicked && (
            <div>
              <button
                disabled
                className='cursor-not-allowed inline-flex justify-center rounded-md border py-3 px-6 text-base font-semibold shadow-xl text-white border-white bg-black hover:bg-white hover:text-black hover:border-none rounded-3xl'
              >
                Thanks!
              </button>
            </div>
          )}
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
