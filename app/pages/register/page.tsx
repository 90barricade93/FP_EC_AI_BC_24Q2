"use client";
import { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { register } from "@/actions/register";
import { signOut, useSession } from "next-auth/react";
import Image from 'next/image'

export default function Register() {
  const [error, setError] = useState<string>();
  const router = useRouter();
  const ref = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    const r = await register({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      name: formData.get("name") as string,
    });
    ref.current?.reset();
    if (r?.error) {
      setError(r.error);
      return;
    } else {
      return router.push("/pages/login");
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
          href="/pages/login"
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
            <span className="text-sm">Inclusive Learning: Bringing the World of Knowledge Within Everyone&apos;s Reach</span>
          </div>
          <div className="flex items-center">
            {showSession()}
          </div>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center flex-grow mt-20 space-y-4">
        <section className="w-full h-full flex items-center justify-center">
          <form
            ref={ref}
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              handleSubmit(formData);
            }}
            className="p-6 w-full max-w-[400px] flex flex-col justify-between items-center gap-2 
              border border-solid border-black bg-white rounded text-black"
          >
            {error && <div className="text-red-500">{error}</div>}
            <h1 className="mb-5 w-full text-2xl font-bold">Register</h1>

            <label className="w-full text-sm">Full Name</label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full h-8 border border-solid border-black py-1 px-2.5 rounded text-[13px]"
              name="name"
              required
            />

            <label className="w-full text-sm">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full h-8 border border-solid border-black py-1 px-2.5 rounded"
              name="email"
              required
            />

            <label className="w-full text-sm">Password</label>
            <div className="flex w-full">
              <input
                type="password"
                placeholder="Password"
                className="w-full h-8 border border-solid border-black py-1 px-2.5 rounded"
                name="password"
                required
              />
            </div>

            <button className="w-full rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
              Sign up
            </button>

            <Link
              href="/pages/login"
              className="text-sm text-[#888] transition duration-150 ease hover:text-black"
            >
              Already have an account?
            </Link>
          </form>
        </section>
        </main>
    </div>
  );
}
