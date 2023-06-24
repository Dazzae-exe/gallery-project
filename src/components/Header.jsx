import { Link } from "react-router-dom";
import { MagnifyingGlassIcon as SearchIcon } from "@heroicons/react/24/outline";
import { useSetRecoilState } from "recoil";
import { searchState } from "../lib/recoiljs/SearchState";
import { useRef } from "react";
import { searchRequest } from "../utils/SearchFetch";

const Header = () => {
  const formData = useRef(null);
  const setSearch = useSetRecoilState(searchState);

  const handleSearch = async (evt) => {
    evt.preventDefault();

    const form = new FormData(formData.current);
    const searchValue = form.get("search").toString();

    let url = import.meta.env.VITE_SEARCH_IMAGES_URL;
    let get = {
      params: {
        query: searchValue,
        per_page: 40,
      },
    };

    return searchRequest(url, get.params, setSearch);
  };

  return (
    <header className="sticky top-0 left-0 z-10 w-full h-full overflow-hidden">
      <div className="container mx-auto w-full h-fit flex items-center justify-between p-4 rounded-2xl bg-schema-light-header dark:bg-schema-dark-header backdrop-blur-sm bg-opacity-90">
        <div className="w-fit h-fit flex flex-col items-start justify-start gap-y-2">
          <h2 className="leading-none">Pikasso</h2>
          <nav>
            <ul className="flex items-center justify-start gap-x-4">
              <li className="w-fit h-fit">
                <Link
                  to="/"
                  className="transition-all duration-300 ease-in-out p-1.5 bg-schema-light-links/30 hover:bg-schema-light-links/50 dark:hover:bg-schema-dark-links/40 backdrop-blur-md dark:bg-schema-dark-links/30 rounded-full text-schema-dark-base/70 dark:text-schema-light-base/70 hover:text-schema-dark-base dark:hover:text-schema-light-base"
                >
                  Gallery
                </Link>
              </li>
              <li className="w-fit h-fit">
                <Link
                  to="/about"
                  className="transition-all duration-300 ease-in-out p-1.5 bg-schema-light-links/30 hover:bg-schema-light-links/50 dark:hover:bg-schema-dark-links/40 backdrop-blur-md dark:bg-schema-dark-links/30 rounded-full text-schema-dark-base/70 dark:text-schema-light-base/70 hover:text-schema-dark-base dark:hover:text-schema-light-base"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <form className="relative w-fit h-fit" ref={formData}>
          <input
            type="text"
            name="search"
            placeholder="Search something..."
            className="relative w-60 rounded-full p-2.5 bg-schema-light-links/30 hover:bg-schema-light-links/50 dark:hover:bg-schema-dark-links/40 backdrop-blur-md dark:bg-schema-dark-links/30 outline-none border border-schema-dark-base/40 dark:border-schema-light-base/40 z-20 placeholder:text-gray-300"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 z-20 rounded-full bg-transparent w-fit h-fit"
            onClick={(evt) => handleSearch(evt)}
          >
            <SearchIcon width={24} height={24} />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
