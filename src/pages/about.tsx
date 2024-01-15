import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const AboutPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query AboutPageQuery {
      contentfulAboutMeDescriptionTextNode {
        description
      }
      allContentfulSkills(filter: {node_locale: {eq: "en-US"}}) {
        edges {
          node {
            skill
          }
        }
      }
      allContentfulEducation(filter: {node_locale: {eq: "en-US"}}) {
        edges {
          node {
            educationName
            schoolName
            city
            date
          }
        }
      }
      allContentfulWorkExperience(filter: {node_locale: {eq: "en-US"}}) {
        edges {
          node {
            title
            company
            city
            date
          }
        }
      }
    }
  `);

  const { contentfulAboutMeDescriptionTextNode, allContentfulSkills, allContentfulEducation, allContentfulWorkExperience } = data;


  return (
    <div id="about" className="w-auto h-auto relative bg-gray-200 px-[25px] py-[50px] 2xl:px-[400px] md:px-[150px]">
      {/* About Me Section */}
      <h1 className="text-zinc-800 text-[22px] md:text-[40px] font-bold uppercase text-center">About Me</h1>
      <div className="w-[30px] h-[0px] border-2 border-rose-300 m-auto mt-[15px]"></div>
      <div className="text-zinc-700 text-l md:text-xl font-normal text-center py-[25px] pb-[65px]">
      {contentfulAboutMeDescriptionTextNode.description}</div>

      {/* Skills Section */}
      <h2 className="font-bold text-[22px] md:text-[32px] text-zinc-800 text-center pb-[20px]">
        Skills
      </h2>
      <div className="flex flex-wrap gap-[10px] md:gap-[12px] pb-[45px]">
        {allContentfulSkills.edges.map(({ node }, index) => (
        <div className="w-[99px] h-[34px] md:h-[40px] md:w-[116px] bg-[#D9DECD] rounded-[7px]">
          <div key={index} className="text-center text-neutral-500 text-sm md:text-base font-semibold mt-[5px] md:mt-[8px]">
            {node.skill}
          </div>
        </div>
        ))}
      </div>
      <div className="md:flex md:justify-around	">
      {/* Education Section */}
      <div>
      <h2 className="text-zinc-800 text-[22px] md:text-[32px] font-bold text-center pt-[25px]">Education</h2>
            {allContentfulEducation.edges.map(({ node }, index) => (
          <div key={index} className="p-[20px]">
            <h3 className="font-bold text-zinc-800 text-base md:text-xl">{node.educationName}</h3>
            <span className="md:text-xl">{node.schoolName}</span>, <span className="md:text-xl">{node.city}</span>
            <p className="text-neutral-500 text-base font-normal md:text-xl">{node.date}</p>
          </div>
          ))}
          </div>
        {/* <p style={{ color: 'text-zinc-800', fontSize: 'text-xl', fontWeight: 'font-bold', fontFamily: 'Helvetica Neue' }}>{node.educationName}</p>
        <p style={{ color: 'text-zinc-800', fontSize: 'text-xl', fontWeight: 'font-normal', fontFamily: 'Helvetica Neue' }}>IT-Högskolan, Gothenburg</p> */}

      
      {/* Work Experience Section */}
      <div>
      <h2 className="text-zinc-800 text-[22px] md:text-[32px] font-bold text-center pt-[25px]">Work Experience</h2>
      {allContentfulWorkExperience.edges.map(({ node }, index) => (
          <div key={index} className="p-[20px]">
            <h3 className="font-bold text-zinc-800 text-base md:text-xl">{node.title}</h3>
            <span className="md:text-xl">{node.company}</span>, <span className="md:text-xl">{node.city}</span>
            <p className="text-neutral-500 text-base font-normal md:text-xl">{node.date}</p>
          </div>
          ))}
          </div>

    </div>
    </div>

  );
};

export default AboutPage;