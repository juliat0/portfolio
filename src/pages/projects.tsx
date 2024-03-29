import React, { useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Helmet } from 'react-helmet';

// Define the data structure for Project data
interface ProjectData {
  id: string;
  name: string;
  description: {
    description: string;
  };
  category: string;
  images: {
    file: {
      url: string;
    };
  }[];
}

const ProjectsComponent = () => {
  // Fetch project data using GraphQL query
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allContentfulProjects(filter: { node_locale: { eq: "en-US" } }) {
        edges {
          node {
            id
            name
            description {
              description
            }
            category
            images {
              file {
                url
              }
            }
          }
        }
      }
    }
  `);

  // Extract project data from GraphQL query response
  const allProjects: ProjectData[] = data.allContentfulProjects.edges.map(({ node }: { node: ProjectData }) => node);

  // Extract unique project categories
  const categories: string[] = Array.from(new Set(allProjects.map((project) => project.category)));

// State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter projects based on the selected category
  const filteredProjects: ProjectData[] = selectedCategory === "All" ? allProjects : allProjects.filter((project) => project.category === selectedCategory);

  return (
    <div className="w-auto relative bg-zinc-800 px-[25px] py-[50px] 2xl:px-[400px] md:px-[150px]">
      <Helmet>
        <title>Projects - Julia Tomasson</title>
        <meta name="description" content="Browse My Portfolio Projects and Discover My Work" />
      </Helmet>
      <h1 className="text-white text-[22px] md:text-[40px] font-bold uppercase text-center">Projects</h1>
      <div className="w-[30px] h-[0px] border-2 border-rose-300 m-auto mt-[15px] mb-[38px]"></div>
      <div className="">
        <div className="flex justify-center space-x-4 mb-4">
          {/* Buttons to filter projects by category */}
          <button
            onClick={() => setSelectedCategory("All")}
            className={`text-white ${selectedCategory === "All" ? "bg-rose-500" : ""}`}>
            All
          </button>
          {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`text-white ${selectedCategory === category ? "bg-rose-500" : ""}`}>
            {category}
          </button>
          ))}
        </div>
        {filteredProjects.map((project) => (
        <div key={project.name} className="md:flex">
          {project.images[0] && (
          <img src={project.images[0].file.url} alt={project.name} className="w-[310px] md:w-auto h-[210px] mx-auto" />
          )}
          <div className="mb-[100px] px-[38px] pt-[27px] flex flex-col items-center">
            <h2 className="text-center text-white text-[22px] md:text-[32px] font-bold tracking-wide">{project.name}</h2>
            <p className="text-center text-zinc-400 text-base md:text-xl font-normal">{project.description.description}</p>
            {/* Link to view project details */}
            <Link to={`/projects/${project.id}`}>
              <button className="bg-rose-500 text-center mt-[19px] w-[184px] h-[41px] rounded-[7px] text-white text-sm font-bold">
                Read More
              </button>
            </Link>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsComponent;
