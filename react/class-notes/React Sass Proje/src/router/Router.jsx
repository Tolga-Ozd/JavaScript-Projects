import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Projects from "../pages/projects/Projects";
import Contact from "../pages/contact/Contact";

const Router = () => {
  return (
    <div className="home-bgImg-container">
      <Navbar />

      <Home />
      <About />
      <Projects />
      <Contact />

      <Footer />
    </div>
  );
};

export default Router;
