import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from 'react-helmet';

// Define the data structure for the Start Page
interface HomePageData {
  contentfulStartPage: {
    name: string;
    greeting: string;
    title: string;
    description: string;
    image: {
      file: {
        url: string;
      };
    };
  };
}

const HomePage = () => {
  // Use GraphQL to fetch data for the Start Page
  const data: HomePageData   = useStaticQuery(graphql`
    query {
      contentfulStartPage {
        name
        greeting
        title
        description
        image {
          file {
            url
          }
        }
      }
    }
  `);

  const { name, greeting, title, description, image } = data.contentfulStartPage;

  return (
  <div className="w-auto h-screen bg-zinc-800 md:flex md:flex-row-reverse md:justify-center md:items-center">
    <Helmet>
      <title>Julia Tomasson - Home</title>
      <meta name="description" content="Welcome to My Portfolio - Explore My Work and Skills" />
      </Helmet>
    <div className="flex flex-col items-center pb-[80px] pt-[160px] md:pt-[40px]">
      {image && <img src={image.file.url} alt={name} className="w-[171px] md:w-[481px]"/>}
    </div>
    <div className="px-[33px] md:pr-[100px]">
      <h2 className="uppercase text-zinc-300 text-[22px] md:text-[32px]">{greeting}</h2>
      <h1 className="uppercase text-white text-[40px] md:text-[70px]">{name}</h1>
      <h2 className="uppercase text-rose-300 text-[18px] md:text-2xl">{title}</h2>
      <p className="text-zinc-300 text-[22px] md:text-[32px] md:w-[528px]">{description}</p>
    </div>
  </div>
  )
};

export default HomePage;