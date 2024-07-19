"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image"; // Import Image component from next/image

export default function About() {
  const { status } = useSession();
  const router = useRouter();

  const showSession = () => {
    if (status === "authenticated") {
      return (
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
            <span className="text-sm">
              Inclusive Learning: Bringing the World of Knowledge Within Everyone&apos;s Reach
            </span>
          </div>
          <div className="flex items-center">{showSession()}</div>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center flex-grow mt-20 space-y-4">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="text-lg max-w-prose">
          Welcome to the Accessible Learning Platform. Our mission is to make learning
          accessible to everyone, regardless of their circumstances. We believe that
          education is a fundamental right, and we strive to provide resources and tools
          that cater to all learners.
        </p>
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
          <a href="/" className="text-sm hover:text-gray-400">Home</a>
          <a href="/about" className="text-sm hover:text-gray-400">About</a>
          <a href="/contact" className="text-sm hover:text-gray-400">Contact</a>
        </div>
      </div>
    </footer>
    </div>
  );
}

