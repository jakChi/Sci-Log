import { getAllPosts } from "@/lib/api";
import { FaSearch } from "react-icons/fa";

export function SearchBar() {
  return (
    <div className="flex items-center justify-center w-full my-5">
      <div className="relative w-2/3">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 p-1 border rounded-3xl"
          name="search"
          autoComplete="off"
          autoFocus
        />
        <button className="absolute right-5 top-0 bottom-0">
          <FaSearch />
        </button>
      </div>
    </div>
  );
}
