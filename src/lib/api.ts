import { Post } from "@/src/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

/*
*Using the synchronous version (readdirSync) can block the event loop 
*if the directory is large or on slow disks. 
*For better performance in production, 
*consider using the asynchronous version (fs.readdir). 
*/
export function getPostSlugs() {
  return fs.readdirSync(postsDirectory); // returns an array of filenames in the posts directory
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1)); // es unda viswavlo
  return posts;
  
}
