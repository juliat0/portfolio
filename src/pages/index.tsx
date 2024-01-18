import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Header from "../components/header";
import Home from "./home"
import About from "./about"
import Projects from "./projects"
import Contact from "./contact"

const MyComponent = () => {
  
  return (
    <div className="scroll-smooth">
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  )
};

export default MyComponent;