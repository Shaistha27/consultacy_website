import React, { createContext, useContext, useState } from "react";

const EnrollmentContext = createContext();

export const useEnrollment = () => useContext(EnrollmentContext);

export const EnrollmentProvider = ({ children }) => {
  const [isEnrolled, setIsEnrolled] = useState(false);

  const resetEnrollment = () => {
    setIsEnrolled(false);
    localStorage.removeItem("isEnrolled_vlsi");
  };

  return (
    <EnrollmentContext.Provider
      value={{ isEnrolled, setIsEnrolled, resetEnrollment }}
    >
      {children}
    </EnrollmentContext.Provider>
  );
};
