"use client";

import Link from "next/link";
import Image from 'next/image'
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Footer = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const showSession = () => {
    if (status === "authenticated") {
    return (
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
            <Link href="/personalPage" className="text-sm hover:text-gray-400">Home</Link>
            <Link href="/about" className="text-sm hover:text-gray-400">About</Link>
            <Link href="/contact" className="text-sm hover:text-gray-400">Contact</Link>
          </div>
        </div>
      </footer>
    );
    } else if (status === "loading") {
      return <span className="text-[#888] text-sm">Loading...</span>;
    } else {
      return (
        <footer className="w-full bg-gray-800 text-white py-4 mt-8">
          <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
            <div className="flex items-center mb-4 md:mb-0">
              {/* Use Next.js Image component for optimized image loading */}
              <Image src="/logo.png" alt="Small Logo" width={56} height={56} className="mr-4" />
              <div className="flex flex-col items-center">
                <span className="text-lg font-semibold">Your Company</span>
                <span className="text-sm">&copy; 2024 All Rights Reserved</span>
              </div>
            </div>
            <div className="flex space-x-4">
            <Link href="/" className="text-sm hover:text-gray-400">Home</Link>
              <a href="/pages/about" className="text-sm hover:text-gray-400">About</a>
              <a href="/pages/contact" className="text-sm hover:text-gray-400">Contact</a>
              <Link href="/pages/register" className="text-sm hover:text-gray-400">Register</Link>
            </div>
          </div>
        </footer>
      );
    }
  };  
  return showSession();
};
export default Footer;  