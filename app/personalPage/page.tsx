"use client";
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function PersonalPage() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex flex-col">
      <main className="flex flex-col items-center justify-center flex-grow mt-20 space-y-4">
        <h1>Welcome, {session?.user?.name || "User"}</h1>
        <p>This is your personal page.</p>
        <div className="flex justify-center space-x-4 w-full max-w-[600px]">
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin-username"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            LinkedIn
          </a>
        </div>
      </main>
      <footer className="w-full bg-gray-800 text-white py-4 mt-8">
        <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
          <div className="flex items-center mb-4 md:mb-0">
            <Image src="/logo.png" alt="Small Logo" width={48} height={48} className="mr-4" />
            <div className="flex flex-col items-center">
              <span className="text-lg font-semibold">Your Company</span>
              <span className="text-sm">&copy; 2024 All Rights Reserved</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <Link href="/" className="text-sm hover:text-gray-400">Home</Link>
            <Link href="/about" className="text-sm hover:text-gray-400">About</Link>
            <Link href="/contact" className="text-sm hover:text-gray-400">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
