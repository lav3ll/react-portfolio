import React from "react";
import Projects from "./Projects";

const Project = (props) => {
  return (
    <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
      <div className="card-body p-0">
        <div className="d-flex align-items-center">
          <div className="p-5">
            <h2 className="fw-bolder">{props.title}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at
              enim eum illum aperiam placeat esse? Mollitia omnis minima saepe
              recusandae libero, iste ad asperiores! Explicabo commodi quo
              itaque! Ipsam!
            </p>
          </div>
          <img className="img-fluid" src="" alt="..." />
        </div>
      </div>
    </div>
  );
};

export default Project;
