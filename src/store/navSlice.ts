import { INav } from "@/interface/navInterface";
import { create } from "zustand";

const useNav = create<INav>((set, get) => ({
  isNavOpen: false,
  setToggleNav: (value: boolean) =>
    set((state: any) => ({
      ...state,
      isNavOpen: value,
    })),
}));

export default useNav;
