import { useEffect } from "react";
import CharacterItem from "./CharacterItem";
import useLatestVisited from "@/store/latestVisitedSlice";

const Recents = () => {
  const { latestVisited } = useLatestVisited();

  return (
    <main className="mt-[4rem] px-4 w-[1500px] max-w-[90%] mx-auto min-h-screen">
      <h1 className="font-[700] text-[1.3rem]">Last Visited</h1>
      {latestVisited?.length === 0 ? (
        <div className="flex items-center justify-center">
          <p className="font-[500] text-[25px] mt-5">
            Please Select a Character
          </p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-[2rem] my-5">
          {latestVisited?.map((data, index) => (
            <CharacterItem key={index} data={data} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Recents;
