import React from "react";
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
// import Enroll from "./components/Enroll/Enroll.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
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
        {/* <Route path="/api/enroll" element={<Enroll courseId="vlsi" />} /> */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
