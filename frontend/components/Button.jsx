import Link from "next/link";

export default function Button({
  text,
  link,
  textColor,
  bgColor,
  hero,
  border,
}) {
  return (
    <Link href={link} passHref>
      <a
        className={`bg-${bgColor} text-${textColor} ${
          hero ? "text-p1" : "text-p2"
        } py-[10px] px-[20px] ${border && `border border-akuya-6`} `}
      >
        <p>{text}</p>
      </a>
    </Link>
  );
}
