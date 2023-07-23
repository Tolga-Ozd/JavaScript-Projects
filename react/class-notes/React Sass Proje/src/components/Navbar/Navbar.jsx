import React from "react";
import { Navlink } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Navlink to="/" className="nav__link nav__link">
              Home
            </Navlink>
          </li>
          <li className="nav__item">
            <Navlink to="/about" className="nav__link">
              About Me
            </Navlink>
          </li>
          <li className="nav__item">
            <Navlink to="/project" className="nav__link">
              My Projects
            </Navlink>
          </li>
          <li className="nav__item">
            <Navlink to ="/contact" className="nav__link">
              Contact
            </Navlink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
