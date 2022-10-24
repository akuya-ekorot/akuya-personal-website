import Link from "next/link";

export default function NavLink({ link }) {
  return (
    <Link href={link?.attributes?.url} passHref>
      <a className="text-p2 text-akuya-5 p-7">{link?.attributes?.name}</a>
    </Link>
  );
}
