import client from "../lib/apollo";
import { gql } from "@apollo/client";
import NavBar from "../components/NavBar";
import { useEffect, useRef, useState } from "react";
import Hero from "../components/Hero";
import ServiceSection from "../components/ServiceSection";

export default function Home({ navLinks, heading, services, serviceSection }) {
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
    <div className="bg-akuya-1 flex flex-col items-center gap-[60px] w-screen" key="1">
      <NavBar links={navLinks} />
      <Hero
        services={services}
        countRef={countRef}
        heading={heading}
        count={count}
      />
      <ServiceSection serviceSection={serviceSection} services={services} />
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
                    title
                    caption
                    heroTitle
                    imageUrl
                    slug
                  }
                }
              }
            }
          }
        }
        serviceSection {
          data {
            attributes {
              title
              paragraph
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
      serviceSection: data["serviceSection"].data.attributes,
    },
  };
}
