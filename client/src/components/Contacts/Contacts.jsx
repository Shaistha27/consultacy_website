import React from "react";
import "./Contacts.css";
import program_1 from "../../assets/image.png";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
// import msg_icon from "../../assets/image.png"
// import mail_icon from "../../assets/image.png"
// import phone_icon from "../../assets/image.png"
// import location_icon from "../../assets/image.png"
// import white_arrow from "../../assets/image.png"

const Contacts = () => {
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
    <div className="contact" id="contact">
      <div className="contact-col">
        <h3>
         We're Here to help you! 
        </h3>
        <p>
          Our team is dedicated to providing exceptional service and support.
          Whether you have inquiries about our programs, need assistance with
          enrollment, or have any other questions, don't hesitate to reach out.
          We're here to help you every step of the way!
        </p>
        <ul>
          <li>
            {" "}
            <IoMdMail className="icons" />
            contact@PMahaboobSana.com
          </li>
          <li>
            {" "}
            <FaPhoneAlt className="icons" />
            +12345665
          </li>
          <li>
            {" "}
            <FaLocationDot className="icons" />
            banjara hills <br /> jublee hills
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <label>Phone No.</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your mobile no"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="6"
            placeholder="enter your message"
            required
          ></textarea>

          <button type="submit" className="btn" color="#212EA0">
            Submit now 
            {/* <img src={program_1} alt="white_arow" /> */}
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contacts;
