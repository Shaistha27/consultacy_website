import React from 'react'
import "./Programs.css"
import program_1 from "../../assets/image.png"
import cloud from "../../assets/cloud.png"
import devops from "../../assets/devops.png"
import redhat from "../../assets/redhat.png"
import vlsi from "../../assets/vlsi.jpg"
import { FaArrowRightLong } from "react-icons/fa6";


const Programs = () => {
  return (
    


    <div className='programs'>
      <div className='program'>
        <div className='box'>
          <div className='inner-boxes'><img src={cloud} alt="cloud-computing" /> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Quisquam, nihil animi, autem omnis odit ex commodi 
             fuga recusandae expedita voluptatem, explicabo 
             laboriosam aliquid eveniet. </p>
             <FaArrowRightLong className='right-arrow'/>
             </div>
          <div className='inner-boxes'><img src={devops} alt="" /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Quisquam, nihil animi, autem omnis odit ex commodi 
             fuga recusandae expedita voluptatem, explicabo 
             laboriosam aliquid eveniet. </p><h2></h2>
             <FaArrowRightLong className='right-arrow'/>
             </div>
          <div className='inner-boxes'><img src={redhat} alt="" /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Quisquam, nihil animi, autem omnis odit ex commodi 
             fuga recusandae expedita voluptatem, explicabo 
             laboriosam aliquid eveniet. </p>
             <FaArrowRightLong className='right-arrow' />
             </div>
          <div className='inner-boxes'><img src={vlsi} alt="" /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Quisquam, nihil animi, autem omnis odit ex commodi 
             fuga recusandae expedita voluptatem, explicabo 
             laboriosam aliquid eveniet. </p>
             <FaArrowRightLong className='right-arrow'/>
             </div>
        </div>
      </div>

    </div>
  )
}

export default Programs
