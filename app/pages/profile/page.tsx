"use client";
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [name, setName] = useState(session?.user?.name || "");
  const [email, setEmail] = useState(session?.user?.email || "");
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/user/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const result = await res.json();

    if (res.ok) {
      setFeedback(result.message);
      // Optionally, refresh session data to reflect changes
    } else {
      setFeedback(result.message || "Failed to update profile.");
    }
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    router.push('/pages/login');
    return null;
  }

  return (
    <div className="relative min-h-screen flex flex-col">
      <header className="w-full bg-gray-800 text-white py-4 fixed top-0 z-10">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex flex-col items-center">
            <span className="text-xl font-semibold">Accessible Learning Platform</span>
            <span className="text-sm">Inclusive Learning: Bringing the World of Knowledge Within Everyone&apos;s Reach</span>
          </div>
          <button
            className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            onClick={() => router.push("/pages/personalPage")}
          >
            Back to Personal Page
          </button>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center flex-grow mt-20 space-y-4">
        <h1 className="text-3xl font-bold">Profile</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          {feedback && <p className="text-center text-red-500">{feedback}</p>}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-200">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-black mt-1 block w-full rounded-md border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-200">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-200">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Leave blank to keep current password"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Save Changes
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}


