import Image from "next/image";
import Link from "next/link";

export default function ServicesHero({ countRef, count, wordPairs, heading }) {
  return (
    <section className="flex flex-row items-stretch w-full max-w-7xl">
      <div className="flex-grow flex flex-col gap-[60px]">
        <h1 className="text-h1 font-serif text-akuya-6">
          <div className="w-[500px]">{heading}</div>
          <span className="text-accent" ref={countRef}>
            {wordPairs[count].attributes.first}{" "}
            <span className="text-akuya-6">&</span>{" "}
            {wordPairs[count].attributes.second}
          </span>
        </h1>
        <div className="flex flex-row gap-[30px] w-full">
          <Link href="/hire-me" passHref>
            <div
              className={`bg-akuya-6 text-akuya-1 text-p1 py-[10px] px-[20px]`}
            >
              <p>Hire Me</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="relative h-[350px] w-[500px]">
        <Image src={`/rubics.png`} layout="fill" objectFit="cover" priority />
      </div>
    </section>
  );
}
