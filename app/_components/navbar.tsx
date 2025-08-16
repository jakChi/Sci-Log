import Link from "next/link";
// import { ThemeSwitcher } from "./theme-switcher";

export function Navbar() {
  return (
    <nav className="shadow">
      <div className="z-10 fixed top-0 left-0 container w-1/3 px-5 p-3  flex justify-around items-center backdrop-blur-sm bg-transparent border-b border-r border-b-emerald-400 border-r-emerald-400 rounded-br-3xl">
        <Link
          href="/"
          className="text-xl font-bold text-gray-900 dark:text-white"
        >
          🧬Sci-Log
        </Link>
        <div className="flex space-x-4">
          <Link
            href="/about"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            Library
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            Sign Up
          </Link>
          <div>{/* <ThemeSwitcher /> */}</div>
        </div>
      </div>
    </nav>
  );
}
