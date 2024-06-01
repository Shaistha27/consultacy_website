import React  from "react";
import "./index.css"
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Services from "./components/Services/Services.jsx";
import Project from "./components/Projects/Projects.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Course from "./components/Courses/Course.jsx";

function App1() {



  return (
    <div>
    
      <Hero />
      <div className="container">
        <Course/>
        <About  />
        <Services/>

        <Project />
        <Contacts />
        <Footer />
</div>

    </div>
  );
}

export default App1;
