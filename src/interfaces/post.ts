import { type Author } from "./author";

export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean; // es ra aris
};

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  tags?: string[];
}

export interface Post extends PostMeta {
  content: string;
}
