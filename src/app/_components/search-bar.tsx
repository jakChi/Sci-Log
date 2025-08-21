"use client";

import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Post } from "@/src/interfaces/post";
import Link from "next/link";
import { useTranslations } from "next-intl";

export function SearchBar() {
  const [query, setQuery] = useState<string>("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [results, setResults] = useState<Post[]>([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((response) => response.json())
      .then((data: Post[]) => setPosts(data));
  }, []);

  useEffect(() => {
    setResults(
      posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          post.author.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, posts]);

  const t = useTranslations("HomePage.Intro");

  return (
    <div className="flex items-center justify-center w-full my-5 relative">
      <div className="relative w-full">
        <input
          type="text"
          placeholder={t("searchPlaceholder")}
          className={`w-full px-4 p-1 border rounded-3xl outline-none focus:ring-1 focus-ring-gray-100 transition-colors`}
          name="search"
          autoComplete="off"
          autoFocus
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button className="absolute right-5 top-0 bottom-0">
          <FaSearch />
        </button>
      </div>
      {query && (
        <div className="absolute top-10 z-10 w-full mt-2 p-2 rounded-b-3xl bg-neutral-200/90 dark:bg-neutral-900/90 shadow-lg">
          <ul className="max-h-96 overflow-y-auto">
            {results.map((post) => (
              <li
                key={post.slug}
                className="px-4 py-2 my-2 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-3xl cursor-pointer"
              >
                <Link href={`/posts/${post.slug}`}>
                  <h3 className="text-lg font-semibold">{post.title}</h3>
                  <p className="text-sm text-neutral-500">{post.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
