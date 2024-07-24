"use client";

import Link from "next/link";
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Header = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const showSession = () => {
    if (status === "authenticated") {
      return (
        <div className="flex items-center space-x-2">
          <Link href="/profile" className="text-white">{session?.user?.name || "Profile"}</Link>
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
        </div>
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


  return(
    <header className="w-full bg-gray-800 text-white py-4 z-10">
      <div className="w-full px-4 flex items-center justify-between">
        <div className="flex flex-col items-start">
          <span className="text-xl font-semibold">Accessible Learning Platform</span>
          <span className="text-sm">Inclusive Learning: Bringing the World of Knowledge&apos; Within Everyone&apos;s Reach</span>
        </div>
        <div className="flex items-center">
          {showSession()}
        </div>
      </div>
    </header>
  );
};

export default Header;