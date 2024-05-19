import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';


import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="parent_footer" id="parent_footer1">
        <div className="section1">
          <h2 className="footer_heading">InnaTech</h2>
          <hr /> <span className="motto">Prosper, Power, Progress</span> <hr />
        </div>
        <div className="section2">
          <h3>Navigation</h3>
          

<p><a href="/#about">About us</a></p>
  <p><a href="/#program">Programs</a></p>
  <p><a href="/#campus">Services</a></p>
        </div>

        <div className="section2">
          <h3>Contacts</h3>
          <p className="contactsChild1">
            <i
              className="fa-solid fa-phone fa-lg"
              style={{ marginRight: "4px" }}
            ></i>
          <a href="tel:+9666117219">9666117219</a>
          </p>
          <p className="contactsChild1">
            <i
              className="fa-solid fa-envelope fa-lg"
              style={{ marginRight: "4px" }}
            ></i>
            <a href="mailto:pmahaboobsana@gmail.com">@PMahaboobSana.com</a>
          </p>
        </div>
        

        <div className="section2">
          <h3>
            Social Media
            <div className="socialChild1">
              <p>
                <FaInstagram className="icon" />
              </p>
              <p>
                <FaLinkedin className="icon" />
              </p>
              <p>
                <FaGithub className="icon" />
              </p>
            </div>
          </h3>
        </div>
      </div>
      <div className="footer2" style={{color:"white", textAlign:'center'}}>2024 &copy; All Rights Reserved</div>
    </>
  );
};

export default Footer;
