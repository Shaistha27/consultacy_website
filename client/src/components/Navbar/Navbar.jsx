
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../utils/AuthProvider";
import "./Navbar2.css";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa"; // Import the user icon
import Logo from "../../assets/innaNew.png";

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      const storedUsername = localStorage.getItem("username");
      setUsername(storedUsername);
    }
  }, [isLoggedIn]);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const isHome = location.pathname === "/";

  const navbarClass = `container ${sticky ? "dark-nav" : ""} ${
    isHome ? "" : "dark-nav"
  }`;

  return (
    <nav className={navbarClass}>
      <div className="mainNav">
        <div className="mainNav2">
          <NavLink className="navbar-brand logo" to="/">
            <img
              className="innaTechLogo"
              src={Logo}
              style={{ width: "80px" }}
              alt="logo"
            />
          </NavLink>
          <ul
            className={`nav-links ${
              mobileMenu ? "show-mobile-menu" : "hide-mobile-menu"
            }`}
          >
            <li className="nav-item">
              <NavLink
                className="nav-link active homeLink"
                to="/"
                onClick={() => scrollToSection("hero")}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                to="#program"
                onClick={() => scrollToSection("program")}
              >
                Programs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                to="#campus"
                onClick={() => scrollToSection("campus")}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                to="#projects"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="#contact"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">
                Registration
              </NavLink>
            </li>

            <li className="nav-item profile-dropdown">
              <div className="profile-icon" onClick={toggleMenu}>
                <FaUserCircle size={30} />
              </div>
              {isLoggedIn && (
                <ul
                  className={`dropdown-menu ${
                    mobileMenu ? "show-dropdown-menu" : "hide-dropdown-menu"
                  }`}
                >
                  <li>
                    <span className="username-dropdown">{username}</span>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/logout">
                      Logout
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
          </ul>
          <div className="menu-icon" onClick={toggleMenu}>
            {mobileMenu ? <RxCross2 size={30} /> : <IoMenu size={30} />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
