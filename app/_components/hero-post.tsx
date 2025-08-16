import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { type Author } from "@/interfaces/author";
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
    <section id="hero-post" className="w-2/3 mx-5 rounded-3xl">
      <div id="cover-image" className="relative">
        <div className="absolute top-0 left-0 right-0 p-4">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <CoverImage title={title} src={coverImage} slug={slug} />
        <div className="flex flex-col absolute bottom-0 left-0 right-0 bg-black opacity-90 p-4 rounded-b-3xl">
          <h3
            id="hero-post-title"
            className="mb-4 text-xl lg:text-3xl leading-tight"
          >
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div>
            <div id="hero-post-date" className="mb-4 md:mb-0 text-lg">
              <DateFormatter dateString={date} />
            </div>
          </div>
          <div id="hero-post-excerpt-author" className="mt-4 md:mt-0">
            <p className="text-md leading-relaxed mb-4">{excerpt}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
