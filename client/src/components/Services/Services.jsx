// import React from "react";
// import "./Services.css";
// import internship from "../../assets/internship.jpg";
// import consultation from "../../assets/consultation.jpg";
// import training from "../../assets/training.jpeg";
// import { FaArrowRightLong } from "react-icons/fa6";


// const Services = () => {
//   return (
//     <div className="campus" id="campus">
//       <div className="gallery">
//         <div className="gallery-container">
//           <img src={internship} alt="" />
//           <h4>Internships</h4>
//         </div>
//         <div className="gallery-container">
//           <img src={training} alt="" />
//           <h4>Training</h4>
//         </div>
//         <div className="gallery-container">
//           <img src={consultation} alt="" />
//           <h4>Consultation</h4>
//         </div>
//       </div>
//       <button className="btn dark-btn">
//         See more here <FaArrowRightLong className="right-arrow"/>
//       </button>
//     </div>
//   );
// };

// export default Services;


import React from "react";
import "./Services.css";
import internship from "../../assets/internship.jpg";
import consultation from "../../assets/consultation.jpg";
import training from "../../assets/training.jpeg";
import { FaArrowRightLong } from "react-icons/fa6";

const Services = () => {
  return (
    <div className="campus" id="campus">
      <h2 style={{color:"#150048"}}>Our Services</h2>
      <div className="gallery">
        <div className="gallery-container">
          <img src={internship} alt="" />
          <h4>Internships</h4>
        </div>
        <div className="gallery-container">
          <img src={training} alt="" />
          <h4>Training</h4>
        </div>
        <div className="gallery-container">
          <img src={consultation} alt="" />
          <h4>Consultation</h4>
        </div>
      </div>
      <button className="serviceBtn dark-btn">
        See more here <FaArrowRightLong className="right-arrow" />
      </button>
    </div>
  );
};

export default Services;