// import React, { useState } from "react";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Login from "./components/Login";
// import Signup2 from "./components/signup2";
// import VideoUploadForm from "./components/video";
// import ErrorPage from "./components/ErrorPage";
// import { Routes, Route } from "react-router-dom";
// import "./App.css";
// import axios from "axios";

// const App = () => {
//   const [file, setFile] = useState(null);

//   const handleFileSubmit = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (file) {
//       alert("File submitted successfully!");
//       const formData = new FormData();
//       formData.append("file", file);

//       console.log(`File name: ${file.name}`);
// console.log(`File size: ${file.size} bytes`);
//       try {
//         const response = await axios.post('/api/upload-files', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data'
//           }
//         });
//         console.log(response.data); // Handle response from the server
//       } catch (error) {
//         console.error('Error uploading file:', error);
//       }
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup2 />} />
//         <Route path="/videos" element={<VideoUploadForm />} /> {/* Render VideoUploadForm component here */}
//         <Route path="*" element={<ErrorPage />} />
//       </Routes>

//       <form onSubmit={handleSubmit}>
//         <h4>Upload video form</h4>
//         <input type="text" placeholder="Title" required />
//         <input
//           type="file"
//           className="form-control"
//           placeholder="No file"
          
//           required
//           onChange={handleFileSubmit}
//         />
//         <button type="submit">Upload</button>
//       </form>

//        {/* Display uploaded file */}
//        {file && (
//         <div>
//           <h2>Uploaded File</h2>
//           {file.type.startsWith("image/") ? ( // Check if file is an image
//             <img src={URL.createObjectURL(file)} alt="Uploaded File" style={{ maxHeight: "200px", maxWidth: "1000px" }}/>
//           ) : (
//             <p>File type not supported for preview</p>
//           )}
//         </div>
//       )}
//     </>
//   );
// };
    

// export default App;

// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import App1 from "./App1.jsx";
import Signup from "./components/signup2";
import Login from "./components/Login.jsx"
import Admin from "./components/Admin.jsx";
import Programs from "./components/Programs/Programs.jsx";
import Devops from "./components/Devops.jsx";
import VideoUpload from "./components/VideoUpload.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App1 />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Admin />} />
        <Route path="/devops" element={<Devops/>} />
        <Route path="/video" element={<VideoUpload/>}/>
      </Routes>
    </div>
  );
}

export default App;


