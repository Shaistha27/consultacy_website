import React, { useEffect, useState } from 'react';
import "./Navbar.css";
// import menu_icon from "../../assets/menu_icon"
import program_1 from "../../assets/image.png"
import { set } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 300 ? setSticky(true) : setSticky(false);
    });
  }, []);
  
  const [mobileMenu, setMobilemenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu? setMobilemenu(false) : setMobilemenu(true);
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src='' alt='logo' className='logo'/>
      <ul className={mobileMenu?'' :'hide-mobile-menu'}>
        {/* Navigation using anchor tags */}
        <li><a href="#hero" onClick={() => scrollToSection('hero',100)}>Home</a></li>
        <li><a href="#Programs" onClick={() => scrollToSection('program',100)}>Program</a></li>
        <li><a href="#about" onClick={() => scrollToSection('about',100)}>About Us</a></li>
        <li><a href="#campus" onClick={() => scrollToSection('campus', 100)}>Services</a></li>
        <li><a href="#testimonials" onClick={() => scrollToSection('testimonials', 100)}>Testimonials</a></li>
        <li><a href="#contact" onClick={() => scrollToSection('contact', 100)}>Contact Us</a></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
      <img src={program_1} alt="" className='menu_icon' onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
