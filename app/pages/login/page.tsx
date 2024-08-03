"use client";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

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
      return router.push("/pages/personalPage");
    }
  };


  return (
    <div className="relative min-h-screen flex flex-col">
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
              href="./register"
              className="text-sm text-[#888] transition duration-150 ease hover:text-black"
            >
              Don&apos;t have an account?
            </Link>
          </form>
        </section>
        </main>
    </div>
  );
}
