import client from "../lib/apollo";
import { gql } from "@apollo/client";
import NavBar from "../components/NavBar";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import HeroButton from "../components/HeroButton";

export default function Home({ navLinks, heading, services }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  countRef.current = count;

  function getCountTimeout() {
    setTimeout(() => {
      if (countRef.current == services.length - 1) {
        setCount(0);
      } else {
        setCount((count) => {
          return count + 1;
        });
      }
    }, 5000);
  }

  useEffect(() => {
    getCountTimeout();
  });

  return (
    <div className="bg-akuya-1 flex flex-col items-center gap-[60px] h-screen w-screen">
      <NavBar links={navLinks} />
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
            <HeroButton
              text={`Hire Me`}
              bgColor={`akuya-6`}
              textColor={`akuya-1`}
              link={`hire-me`}
            />
            <HeroButton
              text={`Learn More`}
              bgColor={`akuya-1`}
              textColor={`akuya-7`}
              link={`services`}
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
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        navLinks(sort: "position") {
          data {
            attributes {
              name
              url
            }
          }
        }
        hero {
          data {
            attributes {
              heading
              services {
                data {
                  attributes {
                    heroTitle
                    imageUrl
                    slug
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      navLinks: data.navLinks.data,
      heading: data.hero.data.attributes.heading,
      services: data.hero.data.attributes.services.data,
    },
  };
}
