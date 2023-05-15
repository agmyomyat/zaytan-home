import { SignUpForm } from './sign-up.interface';

export function signUpRequest(args: SignUpForm) {
  const payload = JSON.stringify(args);
  return fetch(
    `${process.env.NEXT_PUBLIC_API_URL as string}/merchant/sign-up`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: payload,
    }
  );
}
