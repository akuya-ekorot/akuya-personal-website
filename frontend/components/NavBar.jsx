import NavLink from "../components/NavLink";
import Link from "next/link";

export default function NavBar({ links }) {
  return (
    <nav className="flex justify-center w-screen">
      <div className="flex flex-row justify-between items-center w-full max-w-7xl">
        <Link className="px-2.5" href={`/`}>
          <p className="font-serif text-h2">Akuya</p>
        </Link>
        <div className="flex flex-row items-center">
          {links?.map((navLink, index) => {
            return <NavLink link={navLink} key={index} />;
          })}
        </div>

        <Link href="/hire-me" passHref>
          <div
            className={`bg-accent text-akuya-1 "text-p2" py-[10px] px-[20px]`}
          >
            <p>Hire Me</p>
          </div>
        </Link>
      </div>
    </nav>
  );
}
