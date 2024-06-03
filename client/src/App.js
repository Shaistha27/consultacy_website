import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Routes, Route } from "react-router-dom";
import App1 from "./App1.jsx";
import Signup from "./components/signup2";
import Login from "./components/Login.jsx";
import Admin from "./components/Admin.jsx";
import Devops from "./components/Devops.jsx";
import VideoUpload from "./components/VideoUpload/VideoUpload.jsx";
import VideoList from "./components/VideoList/VideoList.jsx";
import Logout from "./components/Logout.js";
import Profile from "./components/Profile/Profile.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import CheckoutForm from "./CheckoutForm";
import StripePayment from "./StripePaymentForm.jsx";
const stripePromise = loadStripe(
  "pk_test_51PGDQKSEBnF3Dk58FPhrwUtCtA6Nw8IEpKKqU2KEqvXOZjn17lzdOx1h7HahMbp7s6ap5icz4BAnOpkyjtGlUGJS00wmPj4Kr2"
);

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<App1 />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/devops" element={<Devops />} />
        <Route path="/video" element={<VideoUpload />} />
        <Route path="/videolist" element={<VideoList />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<ErrorPage />} />
        {/* <Route
          path="/checkout"
          element={
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          }
        /> */}
        <Route
          path="/checkout"
          element={
            <Elements stripe={stripePromise}>
              <StripePayment />
            </Elements>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
