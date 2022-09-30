import Link from "next/link";

export default function HeroButton({ text, link, textColor, bgColor }) {
  return (
    <Link href={link} passHref>
      <a
        className={`bg-${bgColor} text-${textColor} text-p1 py-[10px] px-[20px] border border-akuya-6`}
      >
        <p>{text}</p>
      </a>
    </Link>
  );
}
