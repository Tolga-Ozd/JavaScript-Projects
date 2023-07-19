import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import Paths from "./pages/page"

function App() {
  return (
    <>
      <Nav />
      <Routes>
       <Route path = "/" element ={<Home />}  />
       <Route path = "/" element ={<Path />}  />
        <People />
        <Contact />
        <NotFound />
      </Routes>
     
      <Footer />
    </>
  );
}

export default App;
