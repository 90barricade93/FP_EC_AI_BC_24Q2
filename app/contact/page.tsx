"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Contact() {
  const { status } = useSession();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      setFeedback("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setFeedback("Failed to send message.");
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <header className="w-full bg-gray-800 text-white py-4 fixed top-0 z-10">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex flex-col items-center">
            <span className="text-xl font-semibold">Accessible Learning Platform</span>
            <span className="text-sm">Inclusive Learning: Bringing the World of Knowledge Within Everyone's Reach</span>
          </div>
          <div className="flex items-center">
            {showSession()}
          </div>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center flex-grow mt-20 space-y-4">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-lg max-w-prose text-center">
          If you have any questions, feel free to reach out to us. We are here to help and support you in your learning journey.
        </p>
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          {feedback && <p className="text-center text-red-500">{feedback}</p>}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </main>
      <footer className="w-full bg-gray-800 text-white py-4 mt-8">
        <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
          <div className="flex items-center mb-4 md:mb-0">
            <img src="/logo.png" alt="Small Logo" className="w-14 h-14 mr-4" />
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
