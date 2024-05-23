import React from "react";
import "./About.css";
import about from "../../assets/about.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-left">
        <img src={about} className=" about-img" alt="about-img" />
      </div>
      <div className="about-right">
        <h2 className="aboutChild1">Nuturing tommorow leaders today</h2>
        <p className="aboutChild2">
          Welcome to our nurturing learning environment, where we dedicate
          ourselves to offering outstanding services for various courses. Our
          goal is to create an authentic, welcoming atmosphere, making you feel
          at ease as you discover our diverse resources. <br /> As you explore
          our website, experience the warmth of our sincere approach, which puts
          your needs first and helps build a connection that will support your
          path to personal growth and success.
          <br /> Our commitment to excellence is evident in the wide range of
          courses we provide, catering to diverse interests and skill levels.
          Our team of dedicated professionals is always ready to assist and
          guide you, ensuring your journey towards self-improvement is both
          enjoyable and fruitful.
        </p>
      </div>
    </div>
  );
};

export default About;