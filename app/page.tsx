"use client";
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const { status, data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/personalPage');
    }
  }, [status, router]);

  const showSession = () => {
    if (status === "authenticated") {
      return (
        <div className="flex items-center space-x-2">
          <Link href="/profile" className="text-white">{session?.user?.name}</Link>
          <button
            className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            onClick={() => {
              signOut({ redirect: false }).then(() => {
                router.push("/");
              });
            }}
          >
            Sign Out
          </button>
        </div>
      );
    } else if (status === "loading") {
      return <span className="text-[#888] text-sm">Loading...</span>;
    } else {
      return (
        <Link
          href="/login"
          className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Sign In
        </Link>
      );
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <header className="w-full bg-gray-800 text-white py-4 fixed top-0 z-10">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex flex-col items-center">
            <span className="text-xl font-semibold">Accessible Learning Platform</span>
            <span className="text-sm">&quot;Inclusive Learning: Bringing the World of Knowledge Within Everyone&apos;s Reach&quot;</span>
          </div>
          <div className="flex items-center">
            {showSession()}
          </div>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center flex-grow mt-20 space-y-4">
        <Image
          src="/Logo.jpg"
          alt="Group 9 app logo"
          className="mb-4 w-[500px] h-[500px] object-cover rounded-lg"
          width={500}
          height={500}
          style={{ backdropFilter: 'blur(10px)' }}
        />
        
      </main>
      <footer className="w-full bg-gray-800 text-white py-4 mt-8">
        <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
          <div className="flex items-center mb-4 md:mb-0">
          {/* Use Next.js Image component for optimized image loading */}
          <Image src="/logo.png" alt="Small Logo" width={56} height={56} />
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

