import { children, createContext, useContext, useState } from "react";

export const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const storeTokenInLs = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  const isLoggedIn = !!token;
  // logout function
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };
  return (
    <authContext.Provider value={{ isLoggedIn, storeTokenInLs, LogoutUser }}>
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
