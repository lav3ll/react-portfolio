import React from "react";
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";

const About = () => {
  return (
    /* About Section*/
    <section class="bg-light py-5">
      <div class="container px-5">
        <div class="row gx-5 justify-content-center">
          <div class="col-xxl-8">
            <div class="text-center my-5">
              <h2 class="display-5 fw-bolder">
                <span class="text-gradient d-inline">About Me</span>
              </h2>
              <p class="lead fw-light mb-4">
                My name is Lavell Francis, and I excel in crafting software
                solutions that fuel brand growth.
              </p>
              <p class="text-muted">
                Hey, I'm Lavell Francis, a self-taught coder. Inspired by the
                pandemic, I dove into coding, turning curiosity into passion.
                Now, I create software to solve problems and contribute
                positively to the world. From web to mobile, I love projects
                that enrich daily life, like crafting snowboarding condition
                checkers or comic reading platforms.
              </p>
              <div class="d-flex justify-content-center fs-2 gap-4">
                <a class="text-gradient" href="#!">
                  <i class="bi bi-twitter"></i>
                </a>
                <a
                  className="text-gradient"
                  href="https://www.linkedin.com/in/lavell-francis/"
                >
                  <BiLogoLinkedin />
                </a>
                <a className="text-gradient" href="https://github.com/lav3ll/">
                  <BiLogoGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
