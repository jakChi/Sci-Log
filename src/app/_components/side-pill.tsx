import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";
import { LanguageSwitcher } from "./language-switcher";

export function SidePill() {
  return (
    <div className="flex flex-col items-center fixed top-0 left-0 p-2 space-y-3 border-b border-r border-neutral-950 dark:border-neutral-100 rounded-br-xl shadow-lg">
      <ThemeSwitcher />
      <LanguageSwitcher />
      <Link
        href="https://github.com/jakChi/Sci-Log"
        target="_blank"
        className="text-neutral-900 dark:text-neutral-400 hover:text-neutral-500 dark:hover:text-neutral-100 text-2xl "
      >
        <FaGithub />
      </Link>
    </div>
  );
}
