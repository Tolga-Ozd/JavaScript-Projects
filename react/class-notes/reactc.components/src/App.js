import React from "react"
import "bulma/css/bulma.css"
import "./App.css"
import Course from "./Course"
import Bootstrap from "./images/bootstrap-5.png"
import Reactkurs from "./images/react2.png"
import Compleweb from "./images/comple-web.jpg"
import developer from "./images/developer.jpg"


function App() {
  return (
    <div className="App">

      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">
            My Courses
          </p>
        
        </div>
      </section>

    <div className="container">

      <section className="section">
      <div className="columns">
        <div className="column">
          <Course
        image = {Bootstrap} 
        title = "Bootstrap 5"
        description = "Bootstrap is one of the most used open source design tools, it is a free CSS framework where we can make designs suitable for the theme you want in proportion to the device size used for your desktop computers, mobile phone or tablet. "/>
        </div>

        <div className="column">
          <Course 
          image = {Reactkurs} 
          title = "React"
          description="React is used to develop single-page pages and mobile applications. React makes it easy to develop a fast and interactive user interface. For example, it facilitates the creation of images such as the search box, logo and message button in the Instagram interface."/>
        </div>

        <div className="column">
            <Course 
          image = {Compleweb} 
          title = "Comple Web "
          description="Complete Application Web Development training has a plan that will make the whole process easier for you. Normally, if you did not have such a planned resource, this process is 2-3 years.." />
        </div>

        <div className="column">    
          <Course 
          image = {developer} 
          title="Frontend Developer"
          description="While the FrontEnd developer includes content about visual components, he is also responsible for its application in interactions that will increase usability. The front-end developer should have knowledge about testing and debugging, if any."/> 
        </div>
      </div>
      </section>
      
    </div>

    </div>
  )
}

export default App
