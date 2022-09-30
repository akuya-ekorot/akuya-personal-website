import client from "../lib/apollo";
import { gql } from "@apollo/client";
import NavBar from "../components/NavBar";
import { useEffect, useRef, useState } from "react";
import Hero from "../components/Hero";

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
      <Hero
        services={services}
        countRef={countRef}
        heading={heading}
        count={count}
      />
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
