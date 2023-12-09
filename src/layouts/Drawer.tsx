import { IoMdClose } from "react-icons/io";
import { navList } from "./Navbar";
import Link from "next/link";
import useNav from "@/store/navSlice";
import SearchField from "@/components/SearchField";

const Drawer = () => {
  const { isNavOpen, setToggleNav } = useNav();

  const handleToggleNav = () => {
    setToggleNav(false);
  };
  return (
    <aside
      className={`w-[500px] max-w-[100vw] fixed top-0 right-0 bottom-0 z-40 lg:hidden bg-white p-5 shadow-md transition-transform duration-300 ease-in-out ${
        isNavOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button className="flex justify-end ml-auto" onClick={handleToggleNav}>
        <IoMdClose size={40} />
      </button>
      <ul className="flex flex-col justify-center items-center gap-4 mt-7">
        {navList.map(({ name, path }, i) => (
          <li key={i}>
            <Link
              href={path}
              className="font-Montserrat text-[20px] font-[600] leading-normal"
              onClick={handleToggleNav}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <SearchField />
      </div>
    </aside>
  );
};

export default Drawer;
