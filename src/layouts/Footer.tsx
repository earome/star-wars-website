import Link from "next/link";
import { PATHS } from "@/routes/path";
import Image from "next/image";

const navList = [
  { name: "Home", path: PATHS.root },
  { name: "Lister", path: PATHS.lister.root },
  { name: "Recents", path: PATHS.recents.root },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="font-Montserrat py-[30px] lg:py-[50px] bg-blue-400">
        <div className="flex flex-col items-center justify-center gap-[20px]">
          <Link className="flex items-end" href="/">
            <Image
              src="/images/Logo.png"
              width={100.56}
              height={40.5}
              alt="logo"
            />
          </Link>

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

          <p className="text-center">&copy; {year} Arome Emmanuel</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
