

// import React from "react";
// import "./Testimonials2.css";
// const Testimonials = () => {
//   return (
//     <div id="carouselExample" className="carousel slide">
//       <h2>What our students say</h2>
//       <div>
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <p>
//               I've been using this online learning app for CLSI, DevOps, RedHat,
//               and cloud computing, and it's been a game-changer for me! The
//               courses are well-structured, easy to follow, and packed with
//               practical exercises. Highly recommended
//             </p>
//             <p>-xyz</p>
//           </div>
//           <div className="carousel-item">
//             <p>
//               As someone new to the world of cloud computing and DevOps, I was
//               overwhelmed with where to start. This app made it all so clear and
//               approachable. The instructors are fantastic, and the hands-on labs
//               really solidify the concepts. A+.
//             </p>
//             <p>-xyz</p>
//           </div>
//           <div className="carousel-item">
//             <p>
//               I can't thank this app enough for helping me transition into a
//               career in cloud computing. The courses are up-to-date with the
//               latest industry trends, and the hands-on labs provide valuable
//               real-world experience. Within months of using this app, I landed
//               my dream job!
//             </p>
//             <p>-xyz</p>
//           </div>
//         </div>
//         <button
//           className="carousel-control-prev pbtn pbtn1"
//           type="button"
//           data-bs-target="#carouselExample"
//           data-bs-slide="prev"
//         >
//           <span className="carousel-control-prev-icon" aria-hidden="true">
//             <i class="fa-solid fa-chevron-left prevArrow myicon" 
//             ></i>
//           </span>
//           {/* <span className="visually-hidden arrow">Previous</span> */}
//         </button>
//         {/* <button
//           className="carousel-control-prev pbtn"
//           type="button"
//           data-bs-target="#carouselExample"
//           data-bs-slide="prev"
//         >
//           <span className="carousel-control-prev-icon" aria-hidden="true">
//             <i class="fa-solid fa-chevron-left prevArrow" style={
//               {
//                 color:'red',background:'red', marginLeft:"800px"
//               }
//             }></i>
//           </span>
         
//         </button> */}
//         <button
//           className="carousel-control-next nbtn"
//           type="button"
//           data-bs-target="#carouselExample"
//           data-bs-slide="next"
//         >
//           <span className="carousel-control-next-icon" aria-hidden="true">
//             <i class="fa-solid fa-chevron-right nextArrow"></i>
//           </span>
//           {/* <span className="visually-hidden">Next</span> */}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;













import React, { useState } from "react";
import "./Testimonials2.css";

const testimonials = [
  {
    text: "I've been using this online learning app for CLSI, DevOps, RedHat, and cloud computing, and it's been a game-changer for me! The courses are well-structured, easy to follow, and packed with practical exercises. Highly recommended",
    author: "-xyz",
  },
  {
    text: "As someone new to the world of cloud computing and DevOps, I was overwhelmed with where to start. This app made it all so clear and approachable. The instructors are fantastic, and the hands-on labs really solidify the concepts. A+.",
    author: "-xyz",
  },
  {
    text: "I can't thank this app enough for helping me transition into a career in cloud computing. The courses are up-to-date with the latest industry trends, and the hands-on labs provide valuable real-world experience. Within months of using this app, I landed my dream job!",
    author: "-xyz",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <h2>What our students say</h2>
      <div className="carousel-inner">
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
            <p>{testimonial.text}</p>
            <p>{testimonial.author}</p>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" onClick={handlePrev}>
        <i className="fa-solid fa-chevron-left prevArrow myicon"></i>
      </button>
      <button className="carousel-control-next" onClick={handleNext}>
        <i className="fa-solid fa-chevron-right nextArrow"></i>
      </button>
    </div>
  );
};

export default Testimonials;
