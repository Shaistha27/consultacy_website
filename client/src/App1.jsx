import React  from "react";



// import './App.css'
import "./index.css"
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Programs from "./components/Programs/Programs.jsx";
import Title from "./components/Title/Title.jsx";
import About from "./components/About/About.jsx";
import Services from "./components/Services/Services.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import Footer from "./components/Footer/Footer.jsx";


function App1() {



  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        {/* <Title subTitle="Our PROGRAM" title="What we Offer" /> */}
        <Programs />
        <About  />
        <Title subTitle="We ensure better servives for better world!" title="Our Services" />
        <Services/>
        <Title subTitle="TESTIMONIALS" title="What our students say" />
        <Testimonials />
        <Title subTitle="CONTACT US" title="Get in touch" />
        <Contacts />
        <Footer />
</div>

    </div>
  );
}

export default App1;
