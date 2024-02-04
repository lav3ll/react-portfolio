import React from "react";
import data from "../Data/Data.json";
import Project from "./Project";

const Projects = () => {
  return (
    /* Projects Section*/
    <section className="py-5">
      <div className="container px-5 mb-5">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bolder mb-0">
            <span className="text-gradient d-inline">Projects</span>
          </h1>
        </div>
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-11 col-xl-9 col-xxl-8">
            {data.map((project) => (
              <Project
                key={project.id}
                image={project.image}
                title={project.title}
                description={project.description}
                language={project.language}
                github={project.github}
                demo={project.demo}
                alt={project.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
