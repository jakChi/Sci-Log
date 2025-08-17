import { getAllPosts } from "@/lib/api";
import { MiniPostPreview } from "./mini-post-preview";
import { useTranslations } from "next-intl";

export function SidePanel() {
  const featuredPosts = getAllPosts().slice(0, 3); // Example: Get the first 5 posts for the side panel

  const t = useTranslations("HomePage.SidePanel");
  return (
    <aside className="w-1/3 p-4 border-l">
      <h2 className="text-xl font-bold mb-4">{t("featuredPosts")}:</h2>
      <ul>
        {featuredPosts.map((post) => (
          <li key={post.slug}>
            <MiniPostPreview
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              slug={post.slug}
            />
          </li>
        ))}
      </ul>
      <h2 className="text-xl font-bold mb-4">{t("featuredAuthors")}:</h2>
      <ul className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
        <li>Author 1</li>
        <li>Author 2</li>
        <li>Author 3</li>
      </ul>
    </aside>
  );
}
