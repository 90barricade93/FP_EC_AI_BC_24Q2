"use client";

import Link from "next/link";
import Image from "next/image"; // Import Image component from next/image

export default function About() {
  return (
    <div className="relative min-h-screen flex flex-col">
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

