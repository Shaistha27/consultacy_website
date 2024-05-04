import React from "react";
import { NavLink } from "react-router-dom";
const ErrorPage = () => {
  return (
    <>
      <div className="notfound container">
        <h1>404</h1>
        <h2>We are sorry, page not found</h2>
      </div>
      <NavLink to="/"> Back to Home Page</NavLink>
    </>
  );
};

export default ErrorPage;
