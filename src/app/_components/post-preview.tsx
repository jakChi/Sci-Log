import { type Author } from "@/src/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { AuthorName } from "./author-name";

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
    <div id="post-preview" className="flex justify-around border-t p-5">
      <div className="w-3/4">
        <h3 className="text-lg font-extrabold md:text-3xl mb-3 leading-snug">
          <Link href={`/posts/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>
        <div className="w-[95%] flex items-center mt-4">
          <Avatar name={author.name} picture={author.picture} />
          <AuthorName name={author.name} size="lg" />
          <span className="mx-2 text-neutral-500 dark:text-neutral-400">
            on
          </span>
          <div className="text-md text-neutral-500 dark:text-neutral-400">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <p className="text-lg mt-5 leading-relaxed">{excerpt}</p>
      </div>
      <div className="flex flex-col w-1/4 ml-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
    </div>
  );
}
