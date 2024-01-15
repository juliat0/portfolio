import React, { useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

const ProjectsComponent = () => {
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

  const allProjects = data.allContentfulProjects.edges.map(({ node }) => node);

  const categories = Array.from(new Set(allProjects.map((project) => project.category)));

  const [selectedCategory, setSelectedCategory] = useState("All");

  // Skapa en ny variabel som innehåller projekten baserat på filterkriterierna
  const filteredProjects = selectedCategory === "All" ? allProjects : allProjects.filter((project) => project.category === selectedCategory);

  return (
    <div className="w-auto relative bg-zinc-800 px-[25px] py-[50px] 2xl:px-[400px] md:px-[150px]">
      <h1 className="text-white text-[22px] md:text-[40px] font-bold uppercase text-center">Projects</h1>
      <div className="w-[30px] h-[0px] border-2 border-rose-300 m-auto mt-[15px] mb-[38px]"></div>
      <div className="">
        <div className="flex justify-center space-x-4 mb-4">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`text-white ${selectedCategory === "All" ? "bg-rose-500" : ""}`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-white ${selectedCategory === category ? "bg-rose-500" : ""}`}
            >
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
              <h2 className="text-center text-white text-[22px] md:text-[32px] font-bold">{project.name}</h2>
              <p className="text-center text-zinc-400 text-base md:text-xl font-normal">{project.description.description}</p>
              <Link to={`/project/${project.id}`}>
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
