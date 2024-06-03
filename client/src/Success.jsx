// Success.jsx
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Success = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const sessionId = searchParams.get("session_id");
    if (sessionId) {
      console.log("Payment successful, session ID:", sessionId);
      // Implement any additional logic such as redirecting the user
    }
  }, [searchParams]);

  return (
    <div>
      <h1>Payment Successful!</h1>
      <p>Thank you for your purchase. You have been enrolled in the course.</p>
    </div>
  );
};

export default Success;
