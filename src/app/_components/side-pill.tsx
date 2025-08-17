import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";
import { LanguageSwitcher } from "./language-switcher";

export function SidePill() {
  return (
    <div className="flex flex-col items-center fixed top-0 right-0 p-2 space-y-3 border-b border-l border-emerald-500 rounded-bl-xl shadow-lg">
      <ThemeSwitcher />
      <LanguageSwitcher />
      <Link
        href="https://github.com/jakChi/Sci-Log"
        target="_blank"
        className="text-gray-500 hover:text-gray-300"
      >
        <FaGithub />
      </Link>
    </div>
  );
}
