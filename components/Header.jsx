'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from '@/components/ThemeToggle';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

import { Button, buttonVariants } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="navbar py-4">
      <nav className="container flex items-center justify-between">
        {/* Mobile view */}
        <div className="navbar-start flex">
          <Link href="/" className="font-semibold">
            <div className="hidden md:flex">
              <span className="text-lg">SaaS Boilerplate</span>
            </div>
            <div className="md:hidden">
              <Image
                src="/saas-app-icon.png"
                alt="SaaS Icon"
                width={40}
                height={40}
                priority
              />
            </div>
          </Link>
          <div className="dropdown ml-2">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg border rounded-box w-52"
            >
              <SignedIn>
                <li>
                  <Link href="/dashboard">Dashboard</Link>
                </li>
              </SignedIn>
              <li>
                <Link href="#">Relevant Link</Link>
              </li>
            </ul>
          </div>
          {/* End mobile view */}
        </div>

        {/* Desktop view */}
        <div className="navbar-end hidden md:flex">
          <ul className="menu menu-horizontal">
            <SignedIn>
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
            </SignedIn>
            <li>
              <Link href="#">Relevant Link</Link>
            </li>
          </ul>
        </div>
        {/* End desktop view */}

        {/* Theme switcher and Clerk button */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          {/* Clerk button and profile*/}
          <SignedOut>
            <SignInButton>
              <Button variant="outline">Sign in</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {/* End Clerk and Theme Switcher */}
        </div>
      </nav>
    </header>
  );
}
