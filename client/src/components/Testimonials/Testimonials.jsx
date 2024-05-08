import React ,{useRef}from 'react'
import "./Testimonials.css"
import program_1 from "../../assets/image.png"
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;


const slideForward = () => {
    if(tx>-50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}
const slideBackward = () => {
    if (tx < 0) {
        tx += 25;
        slider.current.style.transform = `translateX(${tx}%)`;
    }

}
  return (
    <div className='testimonials'>
        <FaArrowLeftLong alt="next-icon" className='next-btn' onClick={slideBackward} />
        
        <FaArrowRightLong alt="next-icon" className='back-btn' id='x' onClick={slideForward} />
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={program_1} alt="" />
                            <div>
                                <h3>William Jackson 1</h3>
                                <span>Educity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, 
                            consectetur adipisicing elit. 
                            Impedit beatae asperiores explicabo
                             nesciunt illo praesentium, vitae sequi 
                             atque ullam quasi ea accusamus 
                             architecto accusantium dolorum magni
                              quia nulla ad consequatur!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={program_1} alt="" />
                            <div>
                                <h3>William Jackson 2</h3>
                                <span>Educity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, 
                            consectetur adipisicing elit. 
                            Impedit beatae asperiores explicabo
                             nesciunt illo praesentium, vitae sequi 
                             atque ullam quasi ea accusamus 
                             architecto accusantium dolorum magni
                              quia nulla ad consequatur!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={program_1} alt="" />
                            <div>
                                <h3>William Jackson 3</h3>
                                <span>Educity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, 
                            consectetur adipisicing elit. 
                            Impedit beatae asperiores explicabo
                             nesciunt illo praesentium, vitae sequi 
                             atque ullam quasi ea accusamus 
                             architecto accusantium dolorum magni
                              quia nulla ad consequatur!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={program_1} alt="" />
                            <div>
                                <h3>William Jackson 4</h3>
                                <span>Educity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, 
                            consectetur adipisicing elit. 
                            Impedit beatae asperiores explicabo
                             nesciunt illo praesentium, vitae sequi 
                             atque ullam quasi ea accusamus 
                             architecto accusantium dolorum magni
                              quia nulla ad consequatur!</p>
                    </div>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Testimonials
