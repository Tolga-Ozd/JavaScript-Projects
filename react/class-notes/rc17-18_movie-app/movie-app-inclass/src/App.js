import React from "react";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
// import AppRouter from "../router/AppRouter";

const App = () => {
  return (
    <div className="gray-dark-main min-h-screen">
      {/* <AppRouter /> */}
      <Navbar />
      <Register />
    </div>
  );
};

export default App;
