import Image from "next/image";

export default function ServiceSection({ serviceSection, services }) {
  return (
    <section className="flex flex-col items-center gap-[30px] max-w-7xl w-full mb-[60px]">
      <div className="flex flex-col items-center justify-center gap-[30px] w-full pt-[60px] pb-[30px]">
        <h2 className="font-serif text-h2">{serviceSection.title}</h2>
        <p className="font-sans text-p1 text-akuya-5">
          {serviceSection.paragraph}
        </p>
      </div>
      <div className="flex flex-row justify-between gap-[30px] w-full">
        {services.slice(0, 3).map((service, index) => {
          const caption = service?.attributes.caption;

          return (
            <div
              className="w-[400px] h-[420px] flex flex-col gap-[30px]"
              key={index}
            >
              <div className="relative flex-grow">
                <Image
                  src={service?.attributes.imageUrl}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <h3 className="font-serif text-h3">
                  {service?.attributes.title}
                </h3>
                <p className="font-sans text-p2 text-akuya-5">
                  {caption.length < 90
                    ? caption
                    : `${caption.substring(0, 90)}...`}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
