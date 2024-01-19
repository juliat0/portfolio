// src/templates/project.js

import React, { useState } from "react";
import { graphql, PageProps } from "gatsby";
import { Helmet } from 'react-helmet';

// Define the data structure for Project Page data
interface ProjectPageData {
  contentfulProjects: {
    name: string;
    link: string;
    description: {
      description: string;
    };
    images: {
      file: {
        url: string;
      };
    }[];
  };
}


const ProjectTemplate: React.FC<PageProps<ProjectPageData>> = ({ data }) => {
  // Extract project data from GraphQL query response
  const { name, description, images, link } = data.contentfulProjects;
  // State to track the current image index for image navigation
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to navigate to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to navigate to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-zinc-800 px-[25px] py-[50px] md:px-[150px] text-white h-screen">
      <Helmet>
        <title>{name} - Julia Tomasson</title>
        <meta name="description" content={`Detailed Information About ${name}`}  />
      </Helmet>
      <h1 className="text-[22px] md:text-[40px] font-bold uppercase text-center mb-[20px]">{name}</h1>
      <div className="flex flex-col items-center justify-center py-[100px]">
        <div className="flex items-center justify-center mb-12">
          {/* Button to navigate to the previous image */}
          <button onClick={prevImage} className="text-white text-xl hover:text-rose-500">
            &lt;
          </button>
          <img
            src={images[currentImageIndex].file.url}
            alt={name}
            className="h-[210px] mx-4"
          />
          {/* Button to navigate to the next image */}
          <button onClick={nextImage} className="text-white text-xl hover:text-rose-500">
            &gt;
          </button>
        </div>
        <p className="text-zinc-400 text-base md:text-xl font-normal text-center mt-4 mb-8">{description.description}</p>
        <a href={link}>Github</a>
      </div>
    </div>
  );
};

// GraphQL query to fetch project data by ID
export const query = graphql`
  query ProjectQuery($id: String!) {
    contentfulProjects(id: { eq: $id }) {
      name
      link
      description {
        description
      }
      images {
        file {
          url
        }
      }
    }
  }
`;

export default ProjectTemplate;
