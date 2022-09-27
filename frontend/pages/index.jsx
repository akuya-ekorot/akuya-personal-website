import client from "../lib/apollo";
import { gql } from "@apollo/client";
import NavBar from "../components/NavBar";

export default function Home({ links }) {
  return (
    <div className="bg-akuya-1 flex flex-col items-stretch h-screen w-screen">
      <NavBar links={links} />
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Links {
        navLinks(sort: "position") {
          data {
            attributes {
              name
              url
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      links: data.navLinks.data,
    },
  };
}
