// import React from 'react'
// import "./Programs.css"
// import program_1 from "../../assets/image.png"
// import cloud from "../../assets/cloud.png"
// import devops from "../../assets/devops.png"
// import redhat from "../../assets/redhat.png"
// import vlsi from "../../assets/vlsi.jpg"
// import { FaArrowRightLong } from "react-icons/fa6";


// const Programs = () => {
//   return (
    


//     <div className='programs'>
//       <div className='program'>
//         <div className='box'>
//           <div className='inner-boxes'><img src={cloud} alt="cloud-computing" /> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
//              Quisquam, nihil animi, autem omnis odit ex commodi 
//              fuga recusandae expedita voluptatem, explicabo 
//              laboriosam aliquid eveniet. </p>
//              <FaArrowRightLong className='right-arrow'/>
//              </div>
//           <div className='inner-boxes'><img src={devops} alt="" /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
//              Quisquam, nihil animi, autem omnis odit ex commodi 
//              fuga recusandae expedita voluptatem, explicabo 
//              laboriosam aliquid eveniet. </p><h2></h2>
//              <FaArrowRightLong className='right-arrow'/>
//              </div>
//           <div className='inner-boxes'><img src={redhat} alt="" /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
//              Quisquam, nihil animi, autem omnis odit ex commodi 
//              fuga recusandae expedita voluptatem, explicabo 
//              laboriosam aliquid eveniet. </p>
//              <FaArrowRightLong className='right-arrow' />
//              </div>
//           <div className='inner-boxes'><img src={vlsi} alt="" /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
//              Quisquam, nihil animi, autem omnis odit ex commodi 
//              fuga recusandae expedita voluptatem, explicabo 
//              laboriosam aliquid eveniet. </p>
//              <FaArrowRightLong className='right-arrow'/>
//              </div>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Programs

import React from "react";
import "./Programs.css";
import cloud from "../../assets/cloud.png";
import devops from "../../assets/devops.png";
import redhat from "../../assets/redhat.png";
import vlsi from "../../assets/vlsi.jpg";
// import { useCart } from "./utils/CartContext";

const Programs = () => {
  // const { addToCart } = useCart();

  // const handleAddToCart = async (productId, productName, price, quantity) => {
  //   await addToCart({ productId, productName, price, quantity });
  // };

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
            {/* <button
              className="cartBtn"
              onClick={() =>
                handleAddToCart("cloud-course-id", "Cloud Computing", 99.99, 1)
              }
            >
              Add to Cart
              <i className="fa-solid fa-cart-shopping"></i>
            </button> */}
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
            {/* <button
              className="cartBtn devBtn"
              onClick={() =>
                handleAddToCart("devops-course-id", "DevOps", 149.99, 1)
              }
            >
              Add to Cart
              <i className="fa-solid fa-cart-shopping"></i>
            </button> */}
          </div>
          <div className="inner-boxes">
            <img src={redhat} alt="redhat" />
            <p>
              Gain expertise in open source solutions with our curated
              curriculum. Whether it's Linux administration, container
              orchestration, or hybrid cloud management, we equip you with the
              skills needed to excel in today's competitive IT landscape.
            </p>
            {/* <button
              className="cartBtn redBtn"
              onClick={() =>
                handleAddToCart("redhat-course-id", "Red Hat", 199.99, 1)
              }
            >
              Add to Cart
              <i className="fa-solid fa-cart-shopping"></i>
            </button> */}
          </div>
          <div className="inner-boxes">
            <img src={vlsi} alt="vlsi" />
            <p>
              Explore VLSI design and unleash your creativity in semiconductor
              engineering. Our specialized courses cover transistor-level
              fundamentals to advanced chip design methodologies, providing the
              tools and insights to excel in this fast-paced industry.
            </p>
            {/* <button
              className="cartBtn"
              onClick={() =>
                handleAddToCart("vlsi-course-id", "VLSI Design", 249.99, 1)
              }
            >
              Add to Cart
              <i className="fa-solid fa-cart-shopping"></i>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;