import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import signup from "./api"; // Import the signup function from your API file

const Signup2 = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
    password: "",
    cpassword: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Call the signup function with user data
      const response = await signup(user);
      // Handle successful signup
      window.alert("Registration successful");
      console.log("Registration successful");
      navigate("/login");
    } catch (error) {
      // Handle signup error
      window.alert("Invalid Registration");
      console.log("Error during signup:", error);
    }
  };

  return (
    <>
      <form className="container" onSubmit={handleSignup} action="http://localhost:3001/register">
        <h2>Sign up</h2>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
            name="name"
            value={user.name}
            onChange={handleInputs}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
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

          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Mobile Number</label>
          <input
            type="tel"
            className="form-control"
            placeholder="Mobile Number"
            name="phone"
            value={user.phone}
            onChange={handleInputs}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Profession</label>
          <input
            type="text"
            className="form-control"
            placeholder="Your work"
            name="work"
            value={user.profession}
            onChange={handleInputs}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Your password"
            name="password"
            value={user.password}
            onChange={handleInputs}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Confirm password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Confirm your password"
            name="cpassword"
            value={user.cpassword}
            onChange={handleInputs}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
      <div>
        <p>
          <NavLink
            to="/login"
            className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          >
            Already registered
          </NavLink>
        </p>
      </div>
    </>
  );
};

export default Signup2;
