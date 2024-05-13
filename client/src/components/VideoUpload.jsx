import React, { useState } from 'react';
import axios from "axios"
import { ThreeDots } from 'react-loader-spinner';

const VideoUpload = ({ addNewVideo }) => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [uploadedVideo, setUploadedVideo] = useState(null);

  const uploadFile = async () => {
    if (!currentVideo) {
      setError('No video file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', currentVideo);
    formData.append('upload_preset', 'videos_preset');

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    try {
      const cloudName = 'dwoxvpgr3';
      const resourceType = 'video';
      const api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

      const res = await axios.post(api, formData, config);
      const { secure_url } = res.data;
      console.log(secure_url);
      return secure_url;
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const videoUrl = await uploadFile();
      const response = await axios.post('/video', { title, description, videoUrl });

      setCurrentVideo(null);
      setTitle('');
      setDescription('');

      setUploadedVideo(response.data.video);
      setLoading(false);
      window.alert("Video uploaded successfully!");
      // addNewVideo(response.data.video);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleVideoChange = (e) => {
    setCurrentVideo(e.target.files[0]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <br />
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <br />
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="video">Video</label>
          <br />
          <input
            type="file"
            accept="video/*"
            id="video"
            onChange={handleVideoChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {loading && (
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="Three Dots"
        />
      )}

      {error && <p>{error}</p>}
    </div>
  );
};

export default VideoUpload;

