import Link from "next/link";
import { useTranslations } from "next-intl";

type Props = {
  name: string;
  color: string;
  icon: string;
};

export function Category({ name, color, icon }: Props) {
  const t = useTranslations("HomePage.Intro.Categories");
  return (
    <span className={``}>
      <Link
        href={`/posts/${name}`}
        className={`inline-block ${color} text-neutral-900 text-[7px] md:text-base font-semibold p-2 md:px-3 rounded-full hover:underline`}
      >
        <span className="hidden md:inline-block">{t(name)}</span>
        <span className="inline-block">{icon}</span>
      </Link>
    </span>
  );
}
