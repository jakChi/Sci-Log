import { Category } from "./category";
import { categories } from "@/src/lib/categories";
import { SearchBar } from "./search-bar";
import { useTranslations } from "next-intl";

export function Intro() {
  const t = useTranslations("HomePage.Intro");

  return (
    <section
      id="intro"
      className="w-full relative flex-col md:flex-row flex items-center md:justify-between mt-10 md:mt-16 mb-10 p-2 md:mb-12"
    >
      <div id="logo-text" className="flex-col md:w-[40%]">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          {t("title")}
        </h1>
        <h4 className="text-lg mt-5 mb-5">{t("description")}</h4>
      </div>
      <div className="w-[90%] md:w-[60%] flex flex-col">
        <ul
          id="categories-list"
          className="absolute md:static top-10 right-10  flex gap-1 items-center justify-around text-sm md:text-lg text-center"
        >
          {categories.map((category) => (
            <li
              key={category.id}
              className={`md:mr-4 md:mb-2 ${
                category.id === 4 ? "col-span-2" : null
              }`}
            >
              <Category
                name={category.name}
                color={category.color}
                icon={category.icon}
              />
            </li>
          ))}
        </ul>

        <SearchBar />
      </div>
    </section>
  );
}
