const React = require('react');
const { useState , useEffect } = React;
const axios = require('axios');

const VideoUploadForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [cloudinaryUrl, setCloudinaryUrl] = useState('');
  const [isAdmin, setIsAdmin] = useState(false); // State to track admin status


  useEffect(() => {
    console.log("useEffect hook called");
    // Fetch user data or check authentication status from your backend
    // Example: axios.get('/user').then(response => setIsAdmin(response.data.isAdmin));
    // For demonstration, setting isAdmin to true
    setIsAdmin(true);
    
  }, []);
  
  useEffect(() => {
    console.log("Admin : ", isAdmin);
  }, [isAdmin]);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('/videos', {
        title,
        description,
        cloudinaryUrl
      });

      if (response.status === 201) {
        alert('Video uploaded successfully');
        // Reset form fields
        setTitle('');
        setDescription('');
        setCloudinaryUrl('');
      } else {
        alert('Failed to upload video');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <h2>Upload Video</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label><br />
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required /><br />
        <label htmlFor="description">Description:</label><br />
        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required /><br />
        <label htmlFor="cloudinaryUrl">Cloudinary URL:</label><br />
        <input type="text" id="cloudinaryUrl" value={cloudinaryUrl} onChange={(e) => setCloudinaryUrl(e.target.value)} required /><br />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default VideoUploadForm;
