import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const MyComponent = () => {
  const data = useStaticQuery(graphql`
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

  return <>

  <div className="w-auto h-screen bg-zinc-800 md:flex md:flex-row-reverse md:justify-center md:items-center">
    <div className="flex flex-col items-center py-[80px]">
  {image && <img src={image.file.url} alt={name} className="w-[171px] md:w-[481px]"/>}
  </div>
  <div className="px-[33px]">
    <h2 className="uppercase text-zinc-300 text-[22px] md:text-[32px]">{greeting}</h2>
    <h1 className="uppercase text-white text-[40px] md:text-[70px]">{name}</h1>
    <h2 className="uppercase text-rose-300 text-[18px] md:text-2xl">{title}</h2>
    <p className="text-zinc-300 text-[22px] md:text-[32px] md:w-[528px]">{description}</p>
</div>
</div>
{/*
md:py-[350px]
 <div className="w-auto h-screen relative bg-zinc-800">
    <div className="w-[800px] h-[136px] left-[296px] top-[447px] absolute text-white text-[70px] font-normal font-['FONTSPRING DEMO - Proxima Nova'] uppercase">{name}</div>
    <div className="w-[864px] h-[46px] left-[296px] top-[560px] absolute text-rose-300 text-2xl font-normal font-['FONTSPRING DEMO - Proxima Nova'] uppercase">{title}</div>
    <div className="w-[533px] left-[296px] top-[403px] absolute text-zinc-300 text-[32px] font-normal font-['FONTSPRING DEMO - Proxima Nova']">{greeting}</div>
    <div className="w-[528px] h-[126px] left-[296px] top-[606px] absolute text-zinc-300 text-[32px] font-normal font-['FONTSPRING DEMO - Proxima Nova']">{description}</div>
    {image && <img src={image.file.url} alt={name} className="w-[122px] h-[119px] left-[45px] top-[21px] absolute"/>}
</div> */}
</>;
};

export default MyComponent;