'use client';

import { useUser } from '@clerk/nextjs'; // Client-side hook for accessing user information
import Link from 'next/link';

export default function Home() {
  const { isSignedIn, user, isLoaded } = useUser();
  return (
    <>
      <div className="text-center mb-20">
        <h1 className="text-2xl font-semibold mb-3">PDF Chat</h1>
        {isSignedIn && isLoaded ? (
          <p>Welcome back, {user.username}!</p>
        ) : (
          <p>
            <Link href="/sign-in" className="font-medium hover:text-pink-600 hover:underline">
              Sign in
            </Link>{' '}
            or{' '}
            <Link href="/sign-up" className="font-medium hover:text-pink-600 hover:underline">
              Create an account
            </Link>{' '}
            to get started.
          </p>
        )}
      </div>
    </>
  );
}
