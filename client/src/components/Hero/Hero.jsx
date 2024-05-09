import React from 'react'
import "./Hero.css"
import {FaArrowRightLong} from "react-icons/fa6"
// import dark_arrow from '../..assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container' id='hero'>
      <div className='hero-text'>
        <h1>We ensure better education for a better world!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Veritatis natus obcaecati nostrum eaque delectus! 
             Delectus nostrum iusto a. Delectus, molestias. 
             Hic error non laudantium eius 
            consequuntur quas temporibus magni eligendi!</p>
            <button className='btn'>Explore more <FaArrowRightLong className='right-arrow'/> </button>
      </div>
    </div>
  )
}

export default Hero
