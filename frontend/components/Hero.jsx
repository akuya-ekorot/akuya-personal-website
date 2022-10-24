import Image from "next/image";
import Button from "../components/Button";

export default function Hero({ countRef, count, services, heading }) {
  return (
    <section className="flex flex-row items-stretch w-full max-w-7xl">
      <div className="flex-grow flex flex-col gap-[60px]">
        <h1 className="text-h1 font-serif w-[500px]">
          {heading}
          <br />
          <span className="text-accent" ref={countRef}>
            {services[count]?.attributes.heroTitle}.
          </span>
        </h1>
        <div className="flex flex-row gap-[30px] w-full">
          <Button
            text={`Hire Me`}
            bgColor={`akuya-6`}
            textColor={`akuya-1`}
            link={`hire-me`}
            hero
          />
          <Button
            text={`Learn More`}
            bgColor={`akuya-1`}
            textColor={`akuya-7`}
            link={`services`}
            hero
            border
          />
        </div>
      </div>
      <div className="relative flex-grow h-[500px] w-[500px]">
        <Image
          src={`${services[count]?.attributes.imageUrl}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
}
