import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <ul className="flex gap-10 py-5 px-3 bg-white font-bold">
        <li>
          <Link href="/image-speech">
            <p className="text-black/80">Image to Speech</p>
          </Link>
        </li>
        <li>
          <Link href="/chat">
            <p className="text-black/80">Chat for Learning</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;