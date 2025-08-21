import { getAllPosts } from "@/src/lib/api";
import { MiniPostPreview } from "./mini-post-preview";
import { useTranslations } from "next-intl";
import Avatar from "./avatar";

export function SidePanel() {
  const featuredPosts = getAllPosts().slice(0, 3); // Example: Get the first 5 posts for the side panel

  const t = useTranslations("HomePage.SidePanel");
  return (
    <aside className="hidden md:block w-1/3 p-4 border-l">
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
      <ul className="mx-5 flex md:flex-row ">
        {featuredPosts.map((post) => (
          <li key={post.slug} className="-mx-3">
            <Avatar name={post.author.name} picture={post.author.picture} />
          </li>
        ))}
      </ul>
    </aside>
  );
}
