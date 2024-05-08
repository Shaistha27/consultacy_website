import React, { useState } from "react";


import viteLogo from "/vite.svg";
// import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Programs from "./components/Programs/Programs.jsx";
import Title from "./components/Title/Title.jsx";
import About from "./components/About/About.jsx";
import Services from "./components/Services/Services.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import Footer from "./components/Footer/Footer.jsx";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer.jsx";

function App() {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        {/* <Title subTitle="Our PROGRAM" title="What we Offer" /> */}
        <Programs />
        <About  setPlayState={setPlayState}/>
        <Title subTitle="We ensure better servives for better world!" title="Our Services" />
        <Services/>
        <Title subTitle="TESTIMONIALS" title="What our students say" />
        <Testimonials />
        <Title subTitle="CONTACT US" title="Get in touch" />
        <Contacts />
        <Footer />
</div>
<VideoPlayer playState={playState} setPlayState ={setPlayState}/>
    </div>
  );
}

export default App;
