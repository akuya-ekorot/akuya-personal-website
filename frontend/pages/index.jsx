import NavLink from "../components/NavLink";

export default function Home() {
  const links = ["Services", "Work", "Case Studies", "Blog", "About Me"];
  return (
    <div className="bg-akuya-1 flex flex-col items-stretch h-screen w-screen">
      <nav className="flex justify-center w-screen">
        <div className="flex flex-row justify-between items-center w-full max-w-7xl">
          <div className="px-2.5">
            <p className="font-serif text-h2">Akuya</p>
          </div>
          <div className="flex flex-row items-center">
            {links.map((navLink) => {
              return <NavLink link={navLink} />;
            })}
          </div>
          <div className="px-5 py-2.5 bg-accent text-akuya-1">
            <a>Hire Me</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
