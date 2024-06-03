import React, { useState, useEffect } from 'react';
import './Course.css';
import { useNavigate } from 'react-router-dom';
import { CiShare1 } from "react-icons/ci";

const Course = () => {
  const [products, setProducts] = useState([]);
  const [enrollmentStatus, setEnrollmentStatus] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/products/getCourse');
        const data = await response.json();
        setProducts(data);

        // Fetch the user's enrollment status
        const token = localStorage.getItem('token');
        if (token) {
          const enrollmentResponse = await fetch('http://localhost:3001/products/enrollmentStatus', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
          });

          if (enrollmentResponse.ok) {
            const enrollmentData = await enrollmentResponse.json();
            setEnrollmentStatus(enrollmentData);
          } else {
            console.error('Failed to fetch enrollment status');
          }
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleEnroll = async (productId) => {
    const token = localStorage.getItem('token');

    if (!token) {
      window.alert('You need to be logged in to enroll');
      navigate('/login');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3001/products/enroll/${productId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        setEnrollmentStatus((prevStatus) => ({
          ...prevStatus,
          [productId]: 'Enrolled',
        }));
        window.alert('Enrollment successful');
        navigate('/videolist');
      } else if (response.status === 409) {
        setEnrollmentStatus((prevStatus) => ({
          ...prevStatus,
          [productId]: 'Already Enrolled',
        }));
        window.alert('Already enrolled in this course');
        navigate('/videolist');
      } else {
        setEnrollmentStatus((prevStatus) => ({
          ...prevStatus,
          [productId]: 'Failed to Enroll',
        }));
        console.error('Error:', data.message);
        window.alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error enrolling in product:', error);
      setEnrollmentStatus((prevStatus) => ({
        ...prevStatus,
        [productId]: 'Failed to Enroll',
      }));
      window.alert('An error occurred while enrolling. Please try again later.');
    }
  };

  return (
    <div>
      <h1 className='prog_heading'>What we Offer</h1>
      <div className="programs" id="program">
        <div className="program allPrograms">
          <div className="product-list">
            {products.map((product) => (
              <div key={product._id} className="product">
                <h2 className='courseName'>{product.productName}</h2>
                <p className='prodDesc'>{product.productDescription}</p>
                <p className='price'>Price: Rs {product.productPrice}</p>
                {enrollmentStatus[product._id] ? (
                  <p className='availability yes'>{enrollmentStatus[product._id]}</p>
                ) : (
                  <p className='availability'>{product.Availability}</p>
                )}
               <button className='enrollBtn'
                  onClick={() => handleEnroll(product._id)}
                  disabled={product.Availability === 'Coming soon!!!'}
                >
                  {
                  enrollmentStatus[product._id] === 'Enrolled' ? 
                  <>
                  <span style={{ marginRight: "5px" }}>{product.productName}</span >
                  <span className='shareIcon'><CiShare1 /></span>
                  </> 
                  :
                   'Enroll Now'}

                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;

