import Link from "next/link";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";

export function MiniPostPreview({
  title,
  coverImage,
  date,
  slug,
}: {
  title: string;
  coverImage: string;
  date: string;
  slug: string;
}) {
  return (
    <div
      id="mini-post-preview"
      className="flex items-center w-full px-2 rounded-2xl hover:bg-gray-800 transition-colors duration-200"
    >
      <div className="w-1/3">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="flex flex-col p-4 w-2/3">
        <h3 className="text-md leading-snug mb-2">
          <Link href={`/posts/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>
        <div className="text-sm text-gray-500">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </div>
  );
}
