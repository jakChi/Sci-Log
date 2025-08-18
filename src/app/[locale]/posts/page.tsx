"use client";

import { useEffect, useState } from "react";
import { BlogList } from "../../_components/blog-list";
import { Post } from "@/src/interfaces/post";
import Header from "../../_components/header";

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <main className="container w-[90%] mx-auto px-4 py-8">
      <Header />
      <BlogList posts={posts} />
    </main>
  );
}
