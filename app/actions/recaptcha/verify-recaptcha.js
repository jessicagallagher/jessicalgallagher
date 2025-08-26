'use server';

export async function verifyRecaptcha(token) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    throw new Error('reCAPTCHA secret key not configured');
  }

  try {
    const response = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `secret=${secretKey}&response=${token}`,
      }
    );

    const data = await response.json();

    return {
      success: data.success,
      errorCodes: data['error-codes'] || [],
      challenge_ts: data.challenge_ts,
      hostname: data.hostname,
    };
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return {
      success: false,
      errorCodes: ['network-error'],
    };
  }
}
