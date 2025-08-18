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
    <span
      className={`inline-block ${color} text-gray-800 text-sm font-semibold px-3 py-1 rounded-full`}
    >
      <Link href={`/posts/${name}`} className={`hover:underline`}>
        {t(name)} {icon}
      </Link>
    </span>
  );
}
