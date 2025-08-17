import type { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

export function BlogList({ posts }: { posts: Post[] }) {
  return (
    <div>
      <ul className="grid grid-cols-1 gap-y-10 mb-32">
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
      </ul>
    </div>
  );
}
