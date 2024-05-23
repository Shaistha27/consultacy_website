import React from "react";
import "./Programs.css";
import cloud from "../../assets/cloud.png";
import devops from "../../assets/devops.png";
import redhat from "../../assets/redhat.png";
import vlsi from "../../assets/vlsi.jpg";


const Programs = () => {
 
  return (
    <div className="programs" id="program">
      <div className="program allPrograms">
        <div className="box">
          <div className="inner-boxes">
            <img src={cloud} alt="cloud-computing" />
            <p>
              Explore the world of cloud computing with our comprehensive
              courses. From fundamentals to advanced strategies, we'll keep you
              ahead in today's digital-first world, whether you're starting your
              journey or a seasoned professional.
            </p>
            
          </div>
          <div className="inner-boxes">
            <img src={devops} alt="devops" />
            <p>
              Master the principles of DevOps and revolutionize the way you
              build, deploy, and manage software. Our hands-on courses teach you
              the essential skills needed to automate workflows, accelerate
              delivery cycles, and foster a culture of collaboration within your
              organization.
            </p>
            
          </div>
          <div className="inner-boxes">
            <img src={redhat} alt="redhat" />
            <p>
              Gain expertise in open source solutions with our curated
              curriculum. Whether it's Linux administration, container
              orchestration, or hybrid cloud management, we equip you with the
              skills needed to excel in today's competitive IT landscape.
            </p>
            
          </div>
          <div className="inner-boxes">
            <img src={vlsi} alt="vlsi" />
            <p>
              Explore VLSI design and unleash your creativity in semiconductor
              engineering. Our specialized courses cover transistor-level
              fundamentals to advanced chip design methodologies, providing the
              tools and insights to excel in this fast-paced industry.
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;