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
    </div>
  );
}
