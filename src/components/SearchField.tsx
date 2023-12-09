import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useQuery } from "@tanstack/react-query";
import { fetchCharacter } from "@/utils/http";
import { IPerson } from "@/interface/CharacterInterface";
import Link from "next/link";
import { PATHS } from "@/routes/path";
import useLatestVisited from "@/store/latestVisitedSlice";
import useNav from "@/store/navSlice";

const SearchField = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { setToggleNav } = useNav();

  const [isInputFocused, setInputFocused] = useState(false);
  const { addLatestVisited } = useLatestVisited();

  const handleLatestVisited = (data: IPerson) => {
    addLatestVisited(data);
    setToggleNav(false);
  };

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setInputFocused(false);
    }, 200); // Adjust the delay time if needed
  };

  const { isPending, error, data } = useQuery({
    queryKey: ["repoDataSearch", { searchTerm }],
    queryFn: () => fetchCharacter(undefined, `${searchTerm}`),
  });

  let searchItem: React.ReactNode;

  if (isPending) {
    searchItem = <span className="font-[500] text-[30px]">Loading...</span>;
  }

  if (!data || (data?.results.length === 0 && searchTerm === "")) {
    searchItem = (
      <span>No results found. Please try a different search term.</span>
    );
  }
  if (data?.results) {
    searchItem = data?.results.map((res: IPerson, index: number) => (
      <li key={index}>
        <Link
          onClick={() => handleLatestVisited(res)}
          href={PATHS.lister.single(res.url.charAt(res.url.length - 2))}
          className="hover:text-blue-400"
        >
          {res.name}
        </Link>
      </li>
    ));
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="relative">
        <div className="border border-[#D0D5DD] py-[8px] px-2 rounded-[8px] text-darkGreyPrimary flex items-center gap-[8px] flex-1 bg-[#FAFAFA] w-full min-w-[400px]">
          <CiSearch />
          <input
            type="search"
            placeholder="Search"
            className="bg-transparent outline-none border-none text-darkGreyPrimary flex-1"
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            tabIndex={0}
          />
        </div>
        <ul
          className={`absolute top-[110%] left-0 right-0 bg-blue-200 rounded-[10px] p-7 text-gray-500 font-[500] flex flex-col gap-4 ${
            isInputFocused ? "block" : "hidden"
          }`}
        >
          {searchItem}
        </ul>
      </form>
    </>
  );
};

export default SearchField;
