import NavLink from "../components/NavLink";
import Button from "./Button";

export default function NavBar({ links }) {
  return (
    <nav className="flex justify-center w-screen">
      <div className="flex flex-row justify-between items-center w-full max-w-7xl">
        <div className="px-2.5">
          <p className="font-serif text-h2">Akuya</p>
        </div>
        <div className="flex flex-row items-center">
          {links?.map((navLink) => {
            return <NavLink link={navLink} />;
          })}
        </div>
        <Button
          text={`Hire Me`}
          bgColor={`accent`}
          textColor={`akuya-1`}
          link={`hire-me`}
        />
      </div>
    </nav>
  );
}
