import { Post } from "@/src/interfaces/post";
import { PostPreview } from "./post-preview";
import Link from "next/link";
import { useTranslations } from "next-intl";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  const t = useTranslations("HomePage.MoreStories");
  return (
    <section id="more-stories" className="md:my-24 my-10 mb-20 flex flex-col">
      <h2 className="mb-8 text-3xl md:text-6xl font-bold leading-tight">
        {t("title")}
      </h2>
      <div className="grid grid-cols-1 gap-y-10 my-5 md:w-[90%] m-auto">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
      <Link
        href="/posts"
        className="m-auto my-10 p-5 md:w-1/4 border text-sm md:text-lg font-bold text-center rounded-sm cursor-pointer hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition-colors"
        aria-label={t("button")}
      >
        {t("button")}
      </Link>
    </section>
  );
}
