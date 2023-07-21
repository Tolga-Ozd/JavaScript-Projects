import React from "react";
import Nav from "../components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Paths from "../pages/Paths";
import People from "../pages/People";
import PersonDetail from "../pages/PersonDetail";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Footer from "../components/Footer";
import FullStack from "../pages/FullStack";
import Aws from "../pages/Aws";

const AppRouter = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paths" element={<Paths />}>
            <Route path ="fullstack" element = {<FullStack />} />
            <Route path ="aws" element = {<Aws/>} />
        </Route>
        <Route path="/people" element={<People />} />
        <Route path="/people/:id" element={<PersonDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRouter;
