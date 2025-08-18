import { Post } from "@/src/interfaces/post";
import { PostPreview } from "./post-preview";
import Link from "next/link";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  return (
    <section id="more-stories" className="my-24 flex flex-col">
      <h2 className="mb-8 text-5xl md:text-6xl font-bold leading-tight text-center">
        მეტი რჩეული სტატია
      </h2>
      <div className="grid grid-cols-1 gap-y-10 my-10 w-[90%] m-auto">
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
      <button className="m-auto p-5 w-1/4 border text-lg font-bold rounded-sm cursor-pointer hover:bg-gray-200 hover:text-gray-950 transition-colors">
        <Link href="/posts">მეტი სტატიის ნახვა</Link>
      </button>
    </section>
  );
}
