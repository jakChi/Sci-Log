import Link from "next/link";

type Props = {
  name: string;
  color: string;
  icon: string;
};

export function Category({ name, color, icon }: Props) {
  return (
    <span
      className={`inline-block ${color} text-gray-800 text-sm font-semibold px-3 py-1 rounded-full`}
    >
      <Link href={`/categories/${name}`} className={`hover:underline`}>
        {name} {icon}
      </Link>
    </span>
  );
}
