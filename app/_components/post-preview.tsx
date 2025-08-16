import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div
      id="post-preview"
      className="flex justify-around bg-gray-800 p-5 rounded-3xl"
    >
      <div className="w-3/4">
        <h3 className="text-lg font-extrabold md:text-3xl mb-3 leading-snug">
          <Link href={`/posts/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>
        <div className="w-[95%] flex items-center mt-4">
          <Avatar name={author.name} picture={author.picture} />
          <div className="text-lg text-gray-500 mx-10">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <p className="text-xl mt-5 leading-relaxed">{excerpt}</p>
      </div>
      <div className="flex flex-col w-1/4 ml-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
    </div>
  );
}
