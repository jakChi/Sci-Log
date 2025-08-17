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
      className="flex flex-col bg-gray-700 rounded-lg "
    >
      {routing.locales.map((l) => (
        <Link
          key={l}
          href={`/${l}${strip(pathname)}`}
          className="text-xl bg:transparent hover:bg-gray-500 rounded-lg p-1 py-0"
        >
          {l === "ka" ? "🇬🇪" : "🇬🇧"}
        </Link>
      ))}
    </div>
  );
}
