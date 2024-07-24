"use client";
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import navbar from '../navbar';
import StreamlitEmbed from '../streamlitembed';

export default function PersonalPage() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex flex-col">
      <nav className="flex justify-between items-center border-b border-solid border-black bg-gray-200 p-4">
        <Link href="/" className="text-xl font-bold">Accessible Learning</Link>
        {navbar()}
      </nav>
      <main className="flex flex-col items-center justify-center flex-grow mt-20 space-y-4">
        <h1>Welcome, {session?.user?.name || "User"}</h1>
        <p>This is your personal learning page.</p>
        <div className="flex justify-center space-x-4 w-full max-w-[1800px]">
          <div className="flex-1 w-[800px] h-[550px] rounded-md bg-gray-200 p-4 text-center">
            <StreamlitEmbed />
          </div>
          <div className="flex-1 w-[800px] h-[550px] rounded-md bg-gray-200 p-4 text-center">
            <p className="text-3xl font-semibold">COMPONENT</p>
          </div>
        </div>
      </main>
    </div>
  );
}