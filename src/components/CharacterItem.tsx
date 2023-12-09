import { IPerson } from "@/interface/CharacterInterface";
import { PATHS } from "@/routes/path";
import useLatestVisited from "@/store/latestVisitedSlice";
import Link from "next/link";
import React from "react";

interface CharacterItemProps {
  data: IPerson;
}

const CharacterItem: React.FC<CharacterItemProps> = ({ data }) => {
  const { addLatestVisited } = useLatestVisited();

  const handleLatestVisited = (data: IPerson) => {
    addLatestVisited(data);
  };
  return (
    <article className="rounded-md shadow-md p-5 w-[90%] max-w-[calc(70vw-10%)] grid gap-1">
      <h1><strong>{data.name}</strong></h1>
      <p>Birth year: {data.birth_year}</p>
      <p>Eye color: {data.eye_color}</p>
      <Link
        onClick={() => handleLatestVisited(data)}
        href={PATHS.lister.single(data?.url?.charAt(data?.url?.length - 2))}
        className="bg-blue-400 rounded-[5px] p-2 text-center text-white"
      >
        View Details
      </Link>
    </article>
  );
};

export default CharacterItem;
