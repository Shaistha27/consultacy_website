import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import "./VideoList.css";
import { useAuth } from "../utils/AuthProvider";

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const { isAdmin } = useAuth();

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('/video');
        setVideos(response.data.videos);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const handleDelete = async (videoId) => {
    try {
      setLoading(true);
      await axios.delete(`/video/${videoId}`);
      setVideos(prevVideos => prevVideos.filter(video => video._id !== videoId));
      setLoading(false);
      window.alert("Video deleted successfully!");
      setConfirmDeleteId(null);
    } catch (error) {
      setError(error.message);
    }
  };

  const confirmDelete = (videoId) => {
    setConfirmDeleteId(videoId);
  };

  const cancelDelete = () => {
    setConfirmDeleteId(null);
  };

  const handleEdit = (videoId) => {
    setSelectedVideo(videoId);
    setEditedTitle('');
    setEditedDescription('');
    setConfirmDeleteId(null);
  };

  const saveEdit = async (videoId) => {
    try {
      setLoading(true);
      if (!editedTitle.trim()) {
        window.alert("Please enter a title.");
        setLoading(false);
        return;
      }
      if (!editedDescription.trim()) {
        window.alert("Please enter a description.");
        setLoading(false);
        return;
      }

      await axios.put(`/video/${videoId}`, { title: editedTitle, description: editedDescription });
      setVideos(prevVideos =>
        prevVideos.map(video => {
          if (video._id === videoId) {
            return { ...video, title: editedTitle, description: editedDescription };
          } else {
            return video;
          }
        })
      );
      setLoading(false);
      window.alert("Video updated successfully!");
      setSelectedVideo(null);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className='vidHeading'>VLSI</h1>
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
            {isAdmin && (
              <div className="icons-container">
                <div className="edit-icon" onClick={() => handleEdit(video._id)}>
                  <FontAwesomeIcon icon={faEdit} />
                </div>
                <div className="delete-icon" onClick={() => confirmDelete(video._id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </div>
              </div>
            )}
            {selectedVideo === video._id && (
              <div className="edit-form">
                <input type="text" placeholder='Title' value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
                <div className="smallLine"></div>
                <textarea value={editedDescription} placeholder='Description' onChange={(e) => setEditedDescription(e.target.value)} />
                <div style={{ marginTop: "-20px" }} className="smallLine"></div>
                <div className='editBtn'>
                  <button className='save-btn' onClick={() => saveEdit(video._id)}>Save</button>
                  <button className='cancel-btn' onClick={() => setSelectedVideo(null)}>Cancel</button>
                </div>
              </div>
            )}
            {confirmDeleteId === video._id && (
              <div className="delete-confirmation">
                <p>Are you sure you want to delete this video?</p>
                <button className='deleteBtn' onClick={() => handleDelete(video._id)}>Yes</button>
                <button className='noBtn' onClick={cancelDelete}>No</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
export default VideoList;

