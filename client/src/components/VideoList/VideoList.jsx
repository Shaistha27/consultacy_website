// VideoList.js

import React, { useEffect, useState } from 'react';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./VideoList.css";


const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('/video'); // Assuming your backend endpoint to fetch videos is '/videos'
        setVideos(response.data.videos);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
    <h1 className='heading'>VLSI</h1>
    <div className="video-list">
      
      {videos.map((video) => (
        <div key={video._id} className="video-item">
          <video className="video-player" controls>
            <source src={video.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        <div className='title'>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
          </div>
{/* <Link to="/VideoUpload"><FontAwesomeIcon icon={faPlus} className="plus-icon" />
</Link> */}
        </div>
      ))}
    </div>
    </>
  );
};

export default VideoList;
