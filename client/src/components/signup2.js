import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Signup.css";
import { useAuth } from "./utils/AuthProvider";

const Signup = () => {
  const navigate = useNavigate();
  const { storeTokenInLs } = useAuth();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  const handleInputs = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };

  const PostData = async (element) => {
    element.preventDefault();
    const { name, email, phone, password, cpassword } = user;
  
    // Check if any required fields are empty
    if (!name || !email || !phone || !password || !cpassword) {
      alert("Please fill all fields");
      return;
    }
    try {
      const res = await fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, password, cpassword }), // Include all required fields in the request body
      });
      
      const data = await res.json();
      console.log(data);
      
      if (res.ok) {
        alert(data.msg);
        storeTokenInLs(data.token);
        navigate("/login");
      } else {
        alert(data.error || "An error occurred");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };
  
  return (
    <>
    {/* <div container>
      <form className="container" method="POST" onSubmit={PostData}>
        <h2 className="heading">Sign up</h2>
        <div className="parent">
          <div className="mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              name="name"
              value={user.name}
              onChange={handleInputs}
            />
            <div className="smallLine"></div>
          </div>
          <div className="mb-2 emailClass">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Your Email"
              name="email"
              value={user.email}
              onChange={handleInputs}
            />
            <div className="smallLine"></div>
          </div>
          <div className="mb-2">
            <input
              type="tel"
              className="form-control"
              placeholder="Mobile Number"
              name="phone"
              value={user.phone}
              onChange={handleInputs}
            />
            <div className="smallLine"></div>
          </div>

          <div className="mb-2">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword"
              placeholder="Your password"
              name="password"
              value={user.password}
              onChange={handleInputs}
            />
            <div className="smallLine"></div>
          </div>
          <div className="mb-2">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Confirm your password"
              name="cpassword"
              value={user.cpassword}
              onChange={handleInputs}
            />
            <div className="smallLine"></div>
          </div>

          <button type="submit" className="btn">
            Register
          </button>
        </div>
      </form>
      </div>
      <div>
        <p style={{"fontSize": "20px"}}  >
          Already registered?
          <NavLink
            to="/login"
            className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover loginLink"
         style={{"fontSize": "20px"}} >
            Login
          </NavLink>
        </p>
      </div> */}








{/* <div className="signup-form">
        <div className="inner-signup">
          <form className="container" method="POST" onSubmit={PostData}>
            <h2 className="heading">Sign up</h2>
            <div className="parent">
              <div className="mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  name="name"
                  value={user.name}
                  onChange={handleInputs}
                />
                <div className="smallLine"></div>
              </div>
              <div className="mb-2 emailClass">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Your Email"
                  name="email"
                  value={user.email}
                  onChange={handleInputs}
                />
                <div className="smallLine"></div>
              </div>
              <div className="mb-2">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Mobile Number"
                  name="phone"
                  value={user.phone}
                  onChange={handleInputs}
                />
                <div className="smallLine"></div>
              </div>

              <div className="mb-2">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword"
                  placeholder="Your password"
                  name="password"
                  value={user.password}
                  onChange={handleInputs}
                />
                <div className="smallLine"></div>
              </div>
              <div className="mb-2">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Confirm password"
                  name="cpassword"
                  value={user.cpassword}
                  onChange={handleInputs}
                />
                <div className="smallLine"></div>
              </div>

              <button type="submit" className="btn register">
                Register
              </button>
            </div>
          </form>
          <div>
            <p>
              Already registered?
              <NavLink
                to="/login"
                className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover loginLink"
              >
                Login
              </NavLink>
            </p>
          </div>
        </div>
      </div> */}


<div className="signup-form">
      <div className="inner-signup">
        <form className="signup-container" method="POST" onSubmit={PostData}>
          <h2 className="signup-heading">Sign up</h2>
          <div className="parent">
            <div className="mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                name="name"
                value={user.name}
                onChange={handleInputs}
              />
              <div className="smallLine"></div>
            </div>
            <div className="mb-2 emailClass">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Your Email"
                name="email"
                value={user.email}
                onChange={handleInputs}
              />
              <div className="smallLine"></div>
            </div>
            <div className="mb-2">
              <input
                type="tel"
                className="form-control"
                placeholder="Mobile Number"
                name="phone"
                value={user.phone}
                onChange={handleInputs}
              />
              <div className="smallLine"></div>
            </div>

            <div className="mb-2">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword"
                placeholder="Your password"
                name="password"
                value={user.password}
                onChange={handleInputs}
              />
              <div className="smallLine"></div>
            </div>
            <div className="mb-2">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Confirm password"
                name="cpassword"
                value={user.cpassword}
                onChange={handleInputs}
              />
              <div className="smallLine"></div>
            </div>

            <button type="submit" className="btn register">
              Register
            </button>
          </div>
        </form>
        <div>
          <p>
            Already registered?
            <NavLink
              to="/login"
              className="loginLink"
            >
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Signup;