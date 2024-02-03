import React from "react";
import projects from "../Data/Data.json";
import Project from "./Project";
const Projects = () => {
  return (
    /* Projects Section*/
    <section class="py-5">
      <div class="container px-5 mb-5">
        <div class="text-center mb-5">
          <h1 class="display-5 fw-bolder mb-0">
            <span class="text-gradient d-inline">Projects</span>
          </h1>
        </div>
        <div class="row gx-5 justify-content-center">
          <div class="col-lg-11 col-xl-9 col-xxl-8">
            {projects.map((project) => {
              return (
                <Project
                  image={project.image}
                  title={project.title}
                  language={project.language}
                  github={project.github}
                  demo={project.demo}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
