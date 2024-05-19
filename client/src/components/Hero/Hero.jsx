

import React, { useState, useEffect } from "react";

import "./Hero.css";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  const [username, setUsername] = useState("");
 

  return (
    <div className="hero container" id="hero">
      <div className="hero-text">
        <div className="home-page container">
          <div className="home-div">
            <p className="welcome">Welcome</p>
          </div>
        </div>
        <p style={{background:'none', fontFamily: '"Montserrat", sans-serif'}}>
          Through innovative technology and a commitment to excellence, we
          strive to make learning accessible, engaging, and impactful. Join us
          in our journey to ensure that every individual has the opportunity to
          reach their full potential and contribute positively to society.
        </p>
        <button className="exploreBtn">
          Explore more{" "}
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Hero;