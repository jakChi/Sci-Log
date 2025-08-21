import { Category } from "./category";
import { categories } from "@/src/lib/categories";
import { SearchBar } from "./search-bar";
import { useTranslations } from "next-intl";

export function Intro() {
  const t = useTranslations("HomePage.Intro");

  return (
    <section
      id="intro"
      className=" flex-col md:flex-row flex items-center md:justify-between mt-10 md:mt-16 mb-10 p-2 md:mb-12"
    >
      <div id="logo-text" className="flex-col">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          {t("title")}
        </h1>
        <h4 className="text-lg mt-5 mb-5">{t("description")}</h4>
      </div>
      <div id="categories">
        <div className="text-sm md:text-lg text-center md:text-left">
          <ul
            id="categories-list"
            className="flex gap-1 items-center md:justify-start"
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
      </div>
    </section>
  );
}
