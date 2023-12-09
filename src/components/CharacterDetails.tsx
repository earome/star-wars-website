import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchCharacterItem } from "@/utils/http";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useRouter } from "next/router";

const CharacterDetails = () => {
  const params = useParams();
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  const { isPending, error, isError, data } = useQuery({
    queryKey: ["repoDataItem", params?.id],
    queryFn: () => fetchCharacterItem(`${params?.id}`),
  });

  let content: React.ReactNode;

  if (!params || !params.id || isError) {
    content = (
      <div className="h-full flex items-center justify-center">
        <p className="font-[500] text-[30px]">No Charater found</p>
      </div>
    );
  }

  if (isPending) {
    content = (
      <div className="h-full flex items-center justify-center">
        <p className="font-[500] text-[30px]">Loading...</p>
      </div>
    );
  }

  if (!isPending && !isError) {
    content = (
      <div className="w-[500px] max-w-[90%] p-6 mt-[4rem] border rounded-[7px] mx-auto bg-[rgba(0,0,0,0.2)]">
        <h1 className="font[700] text-[30px]">{data?.name}</h1>
        <p>Birthday: {data?.birth_year}</p>
        <p>Height: {data?.height}</p>
        <p>Eye color: {data?.eye_color}</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen py-7 px-4">
      <button
        className="bg-blue-400 flex gap-3 items-center p-2 rounded-[5px] text-white text-[1.2rem]"
        onClick={handleGoBack}
      >
        <FaLongArrowAltLeft />
        <span>Go Back</span>
      </button>
      {content}
    </main>
  );
};

export default CharacterDetails;
