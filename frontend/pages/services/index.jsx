import NavBar from "../../components/NavBar";
import ServicesHero from "../../components/ServicesHero";

import client from "../../lib/apollo";
import { gql } from "@apollo/client";

const Services = (props) => {
  return (
    <>
      <NavBar links={props?.navLinks} />
      <ServicesHero />
    </>
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
