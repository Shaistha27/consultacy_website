import React from "react";
import "./Contacts.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fd4088a3-9b9a-437d-b906-354c6c9ef816");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" >
      <h2>Get in touch</h2>
      <div className="main-contact">
      <div className="contact">
       
        <div className="contact-col left">
          <h3 style={{marginTop:"-10px", fontFamily:'"Inter", "sans-serif"'}}>We're here to help you!</h3>
          <p>
            Our team is dedicated to providing exceptional service and support.
            Whether you have inquiries about our programs, need assistance with
            enrollment, or have any other questions, don't hesitate to reach
            out. We're here to help you every step of the way!
          </p>
          <div className="adminInfo">
          <div className="ul_parent">
            <ul>
              <li>
                <FaEnvelope className="icon" style={{marginRight:"20px"}}/>
                contact@PMahaboobSana.com
              </li>
              <li style={{marginRight:"190px"}}>
                <FaPhone className="icon" />
                +12345665
              </li>
              <li >
                <FaMapMarkerAlt className="icon" />
                Banjara Hills 
              </li>
            </ul>
          </div>

        </div>
        </div>
        </div>

        <div className="contact-col right">
          <form onSubmit={onSubmit} className="contact-form">
            <input className="contact-input"
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
            />
            <input className="contact-input"
              type="tel"
              name="phone"
              placeholder="Enter Your mobile no"
              pattern="[0-9]{10}"
              title="Please enter a 10-digit phone number"
              required
            />
            <textarea className="contact-input"
              name="message"
              id=""
              cols="30"
              rows="6"
              placeholder="Enter your message"
              required
            ></textarea>

            <button type="submit" className=" contactBtn" color="#212EA0">
              Submit now
            </button>
          </form>
          <span className="result-span">{result}</span>
        </div>
        </div>
      </div>
   
  );
};

export default Contact;

