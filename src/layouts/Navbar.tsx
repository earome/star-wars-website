import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { PATHS } from "@/routes/path";
import useNav from "@/store/navSlice";
import Drawer from "./Drawer";
import Image from "next/image";
import SearchField from "@/components/SearchField";

export const navList = [
  { name: "Home", path: PATHS.root },
  { name: "Lister", path: PATHS.lister.root },
  { name: "3 Recents", path: PATHS.recents.root },
];

const Navbar = () => {
  const { setToggleNav } = useNav();
  const handleToggleNav = () => {
    setToggleNav(true);
  };

  return (
    <>
      <Drawer />
      <div className="font-Montserrat py-[30px] px-[40px] lg:pt-[64px] lg:pb-[21px] xl:px-[80px] shadow-md sticky top-0 z-[30] bg-white">
        <div className="flex items-center justify-between">
          <div className="flex-1 flex">
            <Link className="max-w-max" href="/">
              <Image
                src="/images/Logo.png"
                width={100.56}
                height={40.5}
                alt="logo"
              />
            </Link>
          </div>
          <div className="hidden lg:block">
            <SearchField />
          </div>

          <div className="lg:hidden flex-1 flex justify-end">
            <button onClick={handleToggleNav}>
              <FiMenu size="30px" />
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:block flex-1">
            <ul className="flex items-center justify-end gap-[20px] xl:gap-[32px]">
              {navList.map(({ name, path }, i) => (
                <li key={i}>
                  <Link
                    className="font-Montserrat text-[20px] font-[600] leading-normal"
                    href={path}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
