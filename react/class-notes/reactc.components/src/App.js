import React from "react"
import "bulma/css/bulma.css"
import Course from "./Course"
import Bootstrap from "./images/bootstrap-5.png"
import Reactkurs from "./images/react.jpg"
import Compleweb from "./images/comple-web.jpg"
import developer from "./images/developer.jpg"


function App() {
  return (
    <div className="App">

<section class="hero is-link">
  <div class="hero-body">
    <p class="title">
      My Courses
    </p>
   
  </div>
</section>

    <div className="container">
      <div className="columns">

        <div className="column">
          <Course
        image = {Bootstrap} 
        title = "Bootstrap 5"
        description = "Bootstrap is one of the most used open source design tools, it is a free CSS framework where we can make designs suitable for the theme you want in proportion to the device size used for your desktop computers, mobile phone or tablet. We continued our designs with Bootstrap 4 Version for a long time, but Bootstrap took its share in the constantly renewed and updated information and technology field, and the expected new version update came and Bootstrap V5 was ready to use."/>
        </div>

        <div className="column">
          <Course 
          image = {Reactkurs} 
          title = "React"
          description="React, single-page sayfalar ve mobil uygulamalar geliştirmek için kullanılır.  React, hızlı ve interaktif kullanıcı arayüzü geliştirmeyi kolaylaştırır. Örneğin Instagram arayüzünde karşımıza çıkan arama kutusu, logo ve mesaj butonu gibi görsellerin oluşturulmasını kolaylaştırır.  Arayüzdeki tüm işlemleri kolay, maliyetsiz ve yüksek performanslı olarak yapar. Bu nedenle verilerin ve özelliklerin çok hızlı değiştiği uygulamalara kullanılır."/>
        </div>

        <div className="column">
            <Course 
          image = {Compleweb} 
          title = "Comple Web "
          description="Complete Application Web Development training has a plan that will make the whole process easier for you. Normally, if you did not have such a planned resource, this process is 2-3 years, but we can greatly reduce this process by just following the course and without needing any other resources. ** The recommended duration of study for the course is 6-8 months. This process, which is completed in less time, may not be very beneficial." />
        </div>

        <div className="column">    
          <Course 
          image = {developer} 
          title="Frontend Developer"
          description="While the FrontEnd developer includes content about visual components, he is also responsible for its application in interactions that will increase usability. The front-end developer should have knowledge about testing and debugging, if any. In addition, he should have detailed knowledge and understanding of front-end programming languages."/> 
        </div>
      </div>
    </div>

    </div>
  )
}

export default App
