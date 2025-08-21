"use client";

import { useEffect, useState } from "react";
import { BlogList } from "../../_components/blog-list";
import { Post } from "@/src/interfaces/post";
import Header from "../../_components/header";
import { getAllPosts } from "@/src/lib/api";

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <main className="container w-[90%] mx-auto px-4 py-8">
      <Header />
      <BlogList posts={posts} />
    </main>
  );
}
