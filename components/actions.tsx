'use server';

import { redirect } from 'next/navigation';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
): Promise<string | undefined> {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const redirectTo = (formData.get('redirectTo') as string) || '/dashboard';

  // Replace this with your real authentication (e.g. DB lookup, bcrypt, NextAuth, etc.)
  if (email === 'test@example.com' && password === 'password123') {
    redirect(redirectTo);
  }

  // If authentication fails:
  return 'Invalid email or password.';
}