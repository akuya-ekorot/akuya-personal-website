import NavBar from "../../components/NavBar";
import ServicesHero from "../../components/ServicesHero";
import ServicePageServiceSection from "../../components/ServicePageServiceSection";

import client from "../../lib/apollo";
import { gql } from "@apollo/client";
import { useState, useRef, useEffect } from "react";

const Services = (props) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  countRef.current = count;

  function getCountTimeout() {
    setTimeout(() => {
      if (countRef.current == props?.wordPairs.length - 1) {
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
  }, [count]);
  return (
    <div className="bg-akuya-1 flex flex-col items-center gap-[60px] w-screen">
      <NavBar links={props?.navLinks} />
      <ServicesHero
        heading={props?.heading}
        wordPairs={props?.wordPairs}
        count={count}
      />
      <ServicePageServiceSection
        servicePageServiceSection={props?.serviceSection}
        services={props?.services}
      />
    </div>
  );
};

export default Services;

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        navLinks {
          data {
            attributes {
              name
              url
            }
          }
        }
        wordPairs {
          data {
            attributes {
              first
              second
            }
          }
        }
        serviceHero {
          data {
            attributes {
              heading
            }
          }
        }
        services {
          data {
            attributes {
              caption
              title
              imageUrl
              slug
            }
          }
        }
        servicePageServiceSection {
          data {
            attributes {
              heading
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
      wordPairs: data.wordPairs.data,
      heading: data.serviceHero.data.attributes.heading,
      services: data.services.data,
      serviceSection: data.servicePageServiceSection.data.attributes,
    },
  };
}
