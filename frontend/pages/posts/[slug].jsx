import { Client } from "@notionhq/client";
import ImageBlock from "../../components/ImageBlock";
import VideoBlock from "../../components/VideoBlock";
import CodeBlock from "../../components/CodeBlock";
import HeadingBlock from "../../components/HeadingBlock";
import ParagraphBlock from "../../components/ParagraphBlock";
import LightBackground from "../../components/LightBackground";
import Link from "next/link";
import Footer from "../../components/Footer";
import PageContainer from "../../components/PageContainer";
import NavigationBar from "../../components/NavigationBar";

export default function Blog({ blocks }) {
  return (
    <PageContainer>
      <NavigationBar></NavigationBar>
      <LightBackground>
        <div className="flex flex-col gap-2 max-w-[800px] mx-auto">
          {blocks?.map((block) => {
            return block.type == "image" ? (
              <ImageBlock block={block} />
            ) : block.type == "video" ? (
              <VideoBlock block={block} />
            ) : block.type == "code" ? (
              <CodeBlock block={block} />
            ) : block.type == "heading_1" ? (
              <HeadingBlock block={block} hType="h1" />
            ) : block.type == "heading_2" ? (
              <HeadingBlock block={block} hType="h2" />
            ) : block.type == "heading_3" ? (
              <HeadingBlock block={block} hType="h3" />
            ) : (
              <ParagraphBlock block={block} />
            );
          })}
        </div>
      </LightBackground>
      <Footer />
    </PageContainer>
  );
}

export async function getStaticProps(context) {
  const notion = new Client({ auth: process.env.NOTION_INTEGRATION_TOKEN });

  const response = await notion.search({
    query: `${context.params.slug}`,
    sort: {
      direction: "ascending",
      timestamp: "last_edited_time",
    },
  });

  const pageResponse = await notion.blocks.children.list({
    block_id: response.results[0].id,
  });

  const contents = pageResponse.results;

  const blocks = contents.map((block) => {
    return {
      id: block.id,
      type: block.type,
      [block.type]: block[block.type],
    };
  });

  return {
    props: {
      blocks,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const notion = new Client({ auth: process.env.NOTION_INTEGRATION_TOKEN });

  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: "Status",
      select: {
        equals: "Publish",
      },
    },
  });

  function getBlogsPaths(response) {
    const blogs = [];

    response?.results?.map((blog) => {
      const id = blog.id;
      const slug = blog.properties.Name.title[0].plain_text;

      blogs.push({
        params: {
          id,
          slug,
        },
      });
    });
    return blogs;
  }

  const blogs = getBlogsPaths(response);

  return {
    paths: blogs,
    fallback: true,
  };
}
