import { Category } from "./category";
import { categories } from "@/lib/categories";
import { SearchBar } from "./search-bar";

export function Intro() {
  return (
    <section
      id="intro"
      className="rounded-2xl flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 p-2 md:mb-12"
    >
      <div id="logo-text" className="flex-col">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Sci-Log
        </h1>
        <h4 className="text-lg mt-5 mb-5">
          A blog about science, technology, and the future.
        </h4>
      </div>
      <div id="categories">
        <div className="text-lg text-center md:text-left">
          <ul
            id="categories-list"
            className="flex items-center justify-around md:justify-start flex-wrap"
          >
            {categories.map((category) => (
              <li key={category.name} className="mr-4 mb-2">
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
