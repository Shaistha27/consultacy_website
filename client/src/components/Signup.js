import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [work, setWork] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const handleInputs = (e) => {
    const { name, value } = e.target;
    // Update state dynamically based on the input's name attribute
    const setState = {
      name: setName,
      email: setEmail,
      phone: setPhone,
      work: setWork,
      password: setPassword,
      cpassword: setCpassword,
    }[name];
    setState(value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      phone,
      work,
      password,
      cpassword,
    };
    try {
      await axios.post("http://localhost:3001/register", data);
      // Clear form fields after successful submission
      setName("");
      setEmail("");
      setPhone("");
      setWork("");
      setPassword("");
      setCpassword("");
      // Redirect to login page after successful registration
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form className="container" onSubmit={handleFormSubmit}>
        <h2>Sign up</h2>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
            name="name"
            value={name}
            onChange={handleInputs}
          />
        </div>
        {/* Other input fields go here */}
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

export default Signup;
