import React from "react";
import { NavLink } from "react-router-dom";

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink to="/" exact activeClassName="active" className="nav-link">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/about" activeClassName="active" className="nav-link">
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/contact" activeClassName="active" className="nav-link">
          Contact
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/projects" activeClassName="active" className="nav-link">
          Projects
        </NavLink>
      </li>
      <li className="nav-item">
        <a href="../utils/lavell-cv.pdf" download="cv.pdf" className="nav-link">
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
