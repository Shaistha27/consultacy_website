import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (token) {
        try {
          const response = await axios.get("http://localhost:3001/api/me", {
            headers: { Authorization: `Bearer ${token}` },
          });
          console.log("response.data.user", response.data.user);
          setUser(response.data.user);
        } catch (error) {
          console.error("Failed to fetch user data", error);
        }
      }
    };

    fetchUser();
  }, [token]);

  const storeTokenInLs = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };

  const isLoggedIn = !!token;
  const isAdmin = user?.isAdmin === 1;

  const LogoutUser = () => {
    console.log("Logging out, resetting enrollment status...");
    setToken("");
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  };

  return (
    <authContext.Provider
      value={{ isLoggedIn, isAdmin, storeTokenInLs, LogoutUser, user, token }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(authContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of Provider");
  }
  return authContextValue;
};
