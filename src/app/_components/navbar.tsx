import Link from "next/link";
import { useTranslations } from "next-intl";
import { SidePill } from "./side-pill";
// import { ThemeSwitcher } from "./theme-switcher";

export function Navbar() {
  const t = useTranslations("Navbar");

  return (
    <nav className="shadow relative">
      <div className="z-10 fixed top-0 left-0 container w-fit min-w-2/5 px-5 p-3  flex justify-around items-center backdrop-blur-sm bg-transparent border-b border-r border-b-emerald-400 border-r-emerald-400 rounded-br-3xl">
        <Link
          href="/"
          className="mr-10 text-xl font-bold text-gray-900 dark:text-white"
        >
          🧬Sci-Log
        </Link>
        <div className="flex space-x-4">
          <Link
            href="/posts"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            {t("library")}
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            {t("contact")}
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            {t("signUp")}
          </Link>
          <div>{/* <ThemeSwitcher /> */}</div>
        </div>
      </div>
      <SidePill />
    </nav>
  );
}
