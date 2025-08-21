import { AuthorName } from "./author-name";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "./post-title";
import { type Author } from "@/src/interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

export function PostHeader({ title, coverImage, date, author }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:flex md:items-center md:mb-12">
        <div className="flex items-center">
          <Avatar name={author.name} picture={author.picture} />
          <AuthorName name={author.name} size="lg" />
        </div>
        <span className="mx-2 text-neutral-700 dark:text-neutral-400">on</span>
        <div className="text-lg text-neutral-500 dark:text-neutral-400">
          <DateFormatter dateString={date} />
        </div>
      </div>
      <div className="mb-8 md:mb-16 w-[75vw] h-[70vh] overflow-hidden rounded-2xl m-auto">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </>
  );
}
