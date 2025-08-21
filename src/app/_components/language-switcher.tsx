"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routing } from "@/src/i18n/routing";

export function LanguageSwitcher() {
  const pathname = usePathname();

  // Strip current locale prefix and rebuild
  const strip = (p: string) => p.replace(/^\/(en|ka)(\/|$)/, "/");

  return (
    <div
      aria-label="Language switcher"
      className="flex flex-col border rounded-3xl overflow-hidden"
    >
      {routing.locales.map((l) => (
        <Link
          key={routing.locales.indexOf(l) + 1}
          href={`/${l}${strip(pathname)}`}
          className={`text-sm font-semibold bg:transparent p-[2px]   ${
            pathname.startsWith(`/${l}`)
              ? "bg-neutral-800 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-800"
              : "hover:bg-neutral-800 hover:text-neutral-100"
          }`}
        >
          {l}
        </Link>
      ))}
    </div>
  );
}
