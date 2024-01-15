import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulContact {
      email
      image {
        file {
          url
        }
      }
      linkedin
    }
  }
  `);

  const { email, image, linkedin } = data.contentfulContact;


  return (
    <div className="w-auto h-auto relative bg-gray-200 px-[25px] py-[50px] 2xl:px-[400px] md:px-[150px]">
      <h1 className="text-zinc-800 text-[22px] md:text-[40px] font-bold uppercase text-center">Contact</h1>
      <div className="w-[30px] h-[0px] border-2 border-rose-300 m-auto mt-[15px]"></div>
      <p className="text-l md:text-xl font-normal text-center py-[25px]">
      {email}</p>
      <p className="text-l md:text-xl font-normal text-center py-[25px]">Connect on <a href={linkedin}>LinkedIn</a></p>
      <div className="flex flex-col items-center py-[80px]">
  {image && <img src={image.file.url} className="w-[171px] md:w-[481px]"/>}
  </div>
    </div>

  );
};

export default AboutPage;