import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css"

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginUser = async (element) => {
    element.preventDefault();
    const res = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
     if (res.status === 400) {
      window.alert("Invalid Login");
      console.log("Invalid Login");
    } else if (res.status === 200) {
      window.alert("Login successful");
      console.log("Login successful");
      navigate("/");
    }
    else if( res.status === 201){
      window.alert("admin Login sucessfull");
      console.log("admin login sucessfully");
      navigate("/dashboard");

    }
     else {
      window.alert("Unexpected error occurred");
      console.log("Unexpected error occurred");
    }
  };

  return (
    <>
    <h1 className="login-heading">Login</h1>
    <div className="main-body">
    
      <form method="POST" onSubmit={LoginUser} className="form-body">
       
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Your Email"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Your Password"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          value="Log in"
          // onSubmit={LoginUser}
        >
          Log In
        </button>
      </form>
      <div>
        <p>
          <NavLink id="create"
            to="/signup"
            className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            
            
            style={{fontSize: "20px",  textDecoration: "none", color: "blue !important" , fontWeight:"bold", marginTop:"450px", }} >
            Create an account
          </NavLink>
        </p>
      </div>
      </div>
    </>
  );
};

export default Login;
