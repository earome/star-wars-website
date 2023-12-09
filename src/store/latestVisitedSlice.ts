import { ILatestVisited, IPerson } from "@/interface/CharacterInterface";
import { create } from "zustand";

const useLatestVisited = create<ILatestVisited>((set, get) => {
//   const storedValue = window.localStorage.getItem("recents");
//   const initialVisited = storedValue ? JSON.parse(storedValue) : [];
  return {
    latestVisited: [],
    addLatestVisited: (value: IPerson) =>
      set((state) => {
        const { latestVisited } = state;

        const existingIndex = latestVisited.findIndex(
          (visitedItem) => visitedItem.birth_year === value.birth_year
        );

        let updatedVisited;

        if (existingIndex !== -1) {
          updatedVisited = [
            value,
            ...latestVisited.slice(0, existingIndex),
            ...latestVisited.slice(existingIndex + 1),
          ];
        } else {
          updatedVisited = [value, ...latestVisited.slice(0, 2)];
        }

        updatedVisited = updatedVisited.slice(0, 3);

        const recentCharacter = { ...state, latestVisited: updatedVisited };

        localStorage.setItem("recents", JSON.stringify(recentCharacter));

        return recentCharacter;
      }),
  };
});

export default useLatestVisited;
