import { AuthorName } from "./author-name";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { type Author } from "@/src/interfaces/author";
import Link from "next/link";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section id="hero-post" className="md:w-2/3 mx-5 rounded-3xl">
      <div
        id="cover-image"
        className="relative rounded-lg bg-neutral-200 dark:bg-neutral-800"
      >
        <div className="md:absolute top-0 left-0 right-0 p-2 md:p-4 flex items-center">
          <Avatar name={author.name} picture={author.picture} />
          <AuthorName name={author.name} size="lg" />
        </div>
        <CoverImage title={title} src={coverImage} slug={slug} />
        <div className="flex flex-col absolute bottom-0 left-0 right-0 bg-[var(--color-background)] text-[var(--color-foreground)] opacity-80 p-2 md:p-4">
          <h3
            id="hero-post-title"
            className="md:mb-2 text-sm md:text-4xl font-semibold leading-tight"
          >
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>

          <div id="hero-post-date" className="md:mb-2 text-[10px] md:text-lg">
            <DateFormatter dateString={date} />
          </div>

          <p
            id="hero-excerpt"
            className="text-[12px] md:text-lg leading-tight md:leading-relaxed"
          >
            {excerpt}
          </p>
        </div>
      </div>
    </section>
  );
}
