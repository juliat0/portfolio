// src/templates/project.js

import React, { useState } from "react";
import { graphql } from "gatsby";

const ProjectTemplate = ({ data }: any) => {
  const { name, description, images, link } = data.contentfulProjects;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-zinc-800 px-[25px] py-[50px] md:px-[150px] text-white h-screen">
      <h1 className="text-[22px] md:text-[40px] font-bold uppercase text-center mb-12">{name}</h1>
      <div className="flex flex-col items-center justify-center py-[100px]">
        <div className="flex items-center justify-center mb-12">
          <button onClick={prevImage} className="text-white text-xl hover:text-rose-500">
            &lt;
          </button>
          <img
            src={images[currentImageIndex].file.url}
            alt={name}
            className="h-[210px] mx-4"
          />
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
