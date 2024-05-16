import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthProvider.js";
import "./Profile.css";
const Profile = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const [userData, setUserData] = useState(null);

  const callProfilePage = async () => {
    try {
      const res = await fetch("/profile", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        // cookies will reach backend
        credentials: "include",
      });

      if (!res.ok) {
        const error = new Error(res.error);
        throw error;
      }
      const data = await res.json();
      console.log(data);
      setUserData(data);
    } catch (error) {
      console.log("Error caught:", error);
      navigate("/login");
    }
  };
  useEffect(() => {
    callProfilePage();
  }, []);

  return (
    <>
      <div className="profileMain">
        <div className="parent-parent ">
          <h4>My Profile Page</h4>
          {isLoggedIn ? (
            userData && (
              <div className="userInfo">
                <div className="userName">Name : {userData.name}</div>
                <div className="userEmail">Email : {userData.email}</div>
                <div className="userPhone">Phone : {userData.phone}</div>
              </div>
            )
          ) : (
            <h5>Please Log in to access the Profile page</h5>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
