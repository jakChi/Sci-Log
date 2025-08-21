import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";
import { LanguageSwitcher } from "./language-switcher";

export function SidePill() {
  return (
    <div className="flex flex-col items-center fixed top-0 right-0 md:right-2 p-1 md:p-2 space-y-4 border-l border-b rounded-bl-2xl">
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
