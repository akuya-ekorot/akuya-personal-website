import Image from "next/image";
import Link from "next/link";

export default function ServicesHero({ countRef, count, wordPairs, heading }) {
  return (
    <section className="flex flex-row items-stretch w-full max-w-7xl">
      <div className="flex-grow flex flex-col gap-[60px]">
        <h1 className="text-h1 font-serif w-[500px]">
          {heading}
          <br />
          <span className="text-accent" ref={countRef}>
            {wordPairs[count]?.attributes.heroTitle}.
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

          <Link href="/services" passHref>
            <div
              className={`bg-akuya-1 text-akuya-6 text-p1 py-[10px] px-[20px] border border-akuya-6`}
            >
              <p>Learn More</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="relative flex-grow h-[500px] w-[500px]">
        <Image
          src={`${wordPairs[count]?.attributes.imageUrl}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
}
