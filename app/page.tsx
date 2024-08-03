"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/pages/personalPage');
    }
  }, [status, router]);

  return (
    <div className="relative min-h-screen flex flex-col">
      <main className="flex flex-col items-center justify-center flex-grow mt-20 space-y-4">
        <Image
          src="/Logo.jpg"
          alt="Placeholder"
          className="mb-4 object-cover"
          width={500}
          height={500}
        />
      </main>

    </div>
  );
}
