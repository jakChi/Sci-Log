import { type Author } from "@/src/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { AuthorName } from "./author-name";
import { SectionDivider } from "./section-divider";

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
    <>
      <article
        id="post-preview"
        className="w-[90%] md:w-full m-auto flex flex-col md:flex-row  justify-around p-1 md:p-5"
      >
        <div className="md:w-3/4">
          <h3 className="text-md font-extrabold md:text-3xl mb-3 leading-snug">
            <Link
              href={`/posts/${slug}`}
              className="underline md:no-underline md:hover:underline"
            >
              {title}
            </Link>
          </h3>
          <div className="hidden w-[95%] md:flex items-center mt-4">
            <Avatar name={author.name} picture={author.picture} />
            <AuthorName name={author.name} size="lg" />
            <span className="mx-2 text-neutral-500 dark:text-neutral-400">
              on
            </span>
            <div className="text-md text-neutral-500 dark:text-neutral-400">
              <DateFormatter dateString={date} />
            </div>
          </div>
          <p className="text-xs md:text-lg my-5 leading-relaxed">{excerpt}</p>
        </div>
        <div className="flex flex-col md:w-1/4 md:ml-5">
          <CoverImage slug={slug} title={title} src={coverImage} />
        </div>
      </article>
      <SectionDivider />
    </>
  );
}
