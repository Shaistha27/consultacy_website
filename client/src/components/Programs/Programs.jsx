import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./Programs.css";
import cloud from "../../assets/cloud.png";
import devops from "../../assets/devops.png";
import redhat from "../../assets/redhat.png";
import vlsi from "../../assets/vlsi.jpg";
import { useAuth } from "../utils/AuthProvider";
import { useEnrollment } from '../utils/EnrollmentContext';

const Programs = () => {
  const { isLoggedIn, user, token } = useAuth();
  const { isEnrolled, setIsEnrolled } = useEnrollment();
  // const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  console.log("isEnrolled", isEnrolled);

  useEffect(() => {
    const storedEnrollmentStatus = localStorage.getItem('isEnrolled_vlsi');
    if (storedEnrollmentStatus) {
      setIsEnrolled(JSON.parse(storedEnrollmentStatus));
    }
    // setLoading(false);
  }, [setIsEnrolled]);

  useEffect( () =>{
    const checkEnrollment= async()=>{
    
    try {
      const response = await axios.get(`http://localhost:3001/api/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Response from /api/me:", response);
      if (response.data.user.enrolled) {
        // console.log('User is enrolled');
        // setIsEnrolled(true);
        // localStorage.setItem(`isEnrolled_${courseId}`, JSON.stringify(true));
        // navigate('/videolist');
        setIsEnrolled(true)
      } else {
        console.log('User is not enrolled');
        setIsEnrolled(false);
      }
    } catch (error) {
      console.error('Error checking enrollment:', error);
    }
  }
})
  const handleVLSIClick = () => {
    navigate('/api/enroll');
  };

  const handleCloudClick = () => {
    navigate('/cloud');
  };

  const handleDevops = () => {
    navigate('/devops');
  };

  const handleRedHat = () => {
    navigate('/devops');
  };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="programs" id="program">
      <div className="program allPrograms">
        <div className="box">
          <div className="inner-boxes" onClick={handleCloudClick}>
            <img src={cloud} alt="cloud-computing" />
            <p>
              Explore the world of cloud computing with our comprehensive
              courses. From fundamentals to advanced strategies, we'll keep you
              ahead in today's digital-first world, whether you're starting your
              journey or a seasoned professional.
            </p>
            <p className="comingsoon">
              <b>Coming soon!!!</b>
            </p>
          </div>
          <div className="inner-boxes" onClick={handleDevops}>
            <img src={devops} alt="devops" />
            <p>
              Master the principles of DevOps and revolutionize the way you
              build, deploy, and manage software. Our hands-on courses teach you
              the essential skills needed to automate workflows, accelerate
              delivery cycles, and foster a culture of collaboration within your
              organization.
            </p>
            <p className="comingsoon">
              <b>Coming soon!!!</b>
            </p>
          </div>
          <div className="inner-boxes" onClick={handleRedHat}>
            <img src={redhat} alt="redhat" />
            <p>
              Gain expertise in open source solutions with our curated
              curriculum. Whether it's Linux administration, container
              orchestration, or hybrid cloud management, we equip you with the
              skills needed to excel in today's competitive IT landscape.
            </p>
            <p className="comingsoon">
              <b>Coming soon!!!</b>
            </p>
          </div>
          <div id="vlsiBox" className="inner-boxes" onClick={handleVLSIClick}>
            <img src={vlsi} alt="vlsi" />
            <p>
              Explore VLSI design and unleash your creativity in semiconductor
              engineering. Our specialized courses cover transistor-level
              fundamentals to advanced chip design methodologies, providing the
              tools and insights to excel in this fast-paced industry.
            </p>
            <p className="comingsoon">
              <b>{isEnrolled ? "Enrolled" : "Available now!!!"}</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;

