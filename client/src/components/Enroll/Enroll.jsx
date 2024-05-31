import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useEnrollment } from '../utils/EnrollmentContext';
import { useAuth } from '../utils/AuthProvider';

const Enroll = ({ courseId }) => {
  const navigate = useNavigate();
  const { user, isLoggedIn, token } = useAuth();
  const { isEnrolled, setIsEnrolled } = useEnrollment();
  console.log("enrollToken", token);
  console.log("user", user);
  useEffect(() => {
    const checkEnrollment = async () => {
      const storedEnrollmentStatus = localStorage.getItem(`isEnrolled_${courseId}`);
      if (storedEnrollmentStatus) {
        setIsEnrolled(JSON.parse(storedEnrollmentStatus));
        return;
      }

      if (!isLoggedIn || !user || !user._id) {
        console.warn('User is not defined yet');
        return;
      }

      try {
        const response = await axios.get('http://localhost:3001/api/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.data.user.enrolled.some(enrollment => enrollment.courseId === courseId)) {
          setIsEnrolled(true);
          localStorage.setItem(`isEnrolled_${courseId}`, JSON.stringify(true));
        } else {
          setIsEnrolled(false);
        }
      } catch (error) {
        console.error('Error checking enrollment:', error);
      }
    };

    checkEnrollment();
  }, [courseId, isLoggedIn, user, token, setIsEnrolled]);

  const handleEnroll = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/enroll', { courseId }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIsEnrolled(true);
      localStorage.setItem(`isEnrolled_${courseId}`, JSON.stringify(true));
      navigate('/videolist');
    } catch (error) {
      console.error('Error during enrollment:', error);
      alert('Enrollment failed');
    }
  };

  if (!isEnrolled) {
    return (
      <div className="enroll-main" style={{ marginTop: '200px' }}>
        <h1 className='enrollHeading'>Enroll in VLSI Course?</h1>
        <div className="btnParent">
          <button onClick={handleEnroll} className='enroll-btn'>Enroll Now</button>
          <button onClick={() => navigate('/')} className='no-btn'>Cancel</button>
        </div>
      </div>
    );
  }

  return null;
};

export default Enroll;
