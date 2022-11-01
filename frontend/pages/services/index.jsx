import NavBar from "../../components/NavBar";
import client from "../../lib/apollo";
import { gql } from "@apollo/client";

const Services = (props) => {
  return (
    <>
      <NavBar links={props?.navLinks} />
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
