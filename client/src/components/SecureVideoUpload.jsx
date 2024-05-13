import React, { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import axios from 'axios';

const SecureVideoUpload = () => {
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const uploadFile = async ( timestamp, signature) => {
    if (!video) {
      setError('No video file selected');
      return;
    } 
    const folder = 'video';

    const formData = new FormData();
    formData.append('file', video);
    formData.append('upload_preset', 'videos_preset');
    formData.append('signature', signature);
    formData.append('api_key','459769312621715');
    formData.append('folder', folder);

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
      throw error; // Rethrow the error to handle it in the caller function
    }
  };

  const getSignatureForUpload = async(folder) => {
    try {
        const res = await axios.post("localhost:3001/sign-upload", { folder });
    } catch (error) {
        
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { timestamp : videoTimestamp, signature: videoSignature} = await getSignatureForUpload("videos");
      const videoUrl = await uploadFile('video', videoTimestamp,videoSignature );
      await axios.post("localhost:3001/devops", { videoUrl });

      setVideo(null);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="video">Video</label>
          <br />
          <input
            type="file"
            accept="video/*"
            id="video"
            onChange={(e) => setVideo(e.target.files[0])}
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
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      )}

      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default SecureVideoUpload;