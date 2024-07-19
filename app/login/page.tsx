"use client";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

export default function Login() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    const res = await signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      redirect: false,
    });
    if (res?.error) {
      setError(res.error as string);
    }
    if (res?.ok) {
      return router.push("/personalPage");
    }
  };

  const { status } = useSession();

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
            <span className="text-sm">Inclusive Learning: Bringing the World of Knowledge Within Everyone&#39;s Reach</span>
          </div>
          <div className="flex items-center">
            {showSession()}
          </div>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center flex-grow mt-20 space-y-4">
        <section className="w-full h-full flex items-center justify-center">
          <form
            className="p-6 w-full max-w-[400px] flex flex-col justify-between items-center gap-2 
              border border-solid border-black bg-white rounded text-black"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              handleSubmit(formData);
            }}
          >
            {error && <div className="text-black">{error}</div>}
            <h1 className="mb-5 w-full text-2xl font-bold">Sign In</h1>
            <label className="w-full text-sm">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full h-8 border border-solid border-black rounded p-2"
              name="email"
            />
            <label className="w-full text-sm">Password</label>
            <div className="flex w-full">
              <input
                type="password"
                placeholder="Password"
                className="w-full h-8 border border-solid border-black rounded p-2"
                name="password"
              />
            </div>
            <button className="w-full rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
              Sign In
            </button>
            <Link
              href="/register"
              className="text-sm text-[#888] transition duration-150 ease hover:text-black"
            >
              Don&apos;t have an account?
            </Link>
          </form>
        </section>
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

