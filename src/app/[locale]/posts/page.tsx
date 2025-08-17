"use client";

import { useEffect, useState } from "react";
import { BlogList } from "../../_components/blog-list";
import { Post } from "@/interfaces/post";

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <main>
      <BlogList posts={posts} />
    </main>
  );
}
