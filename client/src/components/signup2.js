import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Signup.css";
const Signup = () => {
  const navigate = useNavigate();
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
    console.log(name, email, phone, password, cpassword);
    try {
      const res = await fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const data = await res.json();
      console.log(data);
      console.log(res);
      console.log(data.msg);
      // if (data.status === 422) {
      //   window.alert("Invalid Registeration");
      //   console.log("Invalid Registeration");
      // } else {
      //   window.alert("Registeration successful");
      //   console.log("Registeration successful");

      // }
      if (res.ok) {
        alert(data.msg);
        // Redirect user to login page or do something else
        navigate("/login");
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };
  return (
    <>
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
    </>
  );
};

export default Signup;