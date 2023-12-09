import { useQuery } from "@tanstack/react-query";
import CharacterItem from "./CharacterItem";
import { IPerson } from "@/interface/CharacterInterface";
import { fetchCharacter } from "@/utils/http";
import usePagination from "@/hooks/usePagination";

const Lister = () => {
  const { paginationNumber, currentPage, setCurrentPage } = usePagination(10);

  const { isPending, error, data } = useQuery({
    queryKey: ["repoData", currentPage],
    queryFn: () => fetchCharacter(`${currentPage}`),
  });

  if (isPending) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="font-[500] text-[30px]">Loading...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-[14px] my-5">
      <section>
        <div className="grid grid-cols-2 mx-auto gap-5 my-[3rem] max-w-[90%] lg:grid-cols-4">
          {data?.results.map((result: IPerson, index: number) => (
            <CharacterItem data={result} key={index} />
          ))}
        </div>
        <div className="my-[1rem] flex gap-[1rem] flex-wrap justify-center">
          {paginationNumber.length > 1 &&
            paginationNumber.map((number) => (
              <button
                key={number}
                className={`h-[30px] w-[30px] ${
                  currentPage === number ? "bg-blue-400" : ""
                }`}
                onClick={() => setCurrentPage(number)}
              >
                {number}
              </button>
            ))}
        </div>
      </section>
    </main>
  );
};

export default Lister;
