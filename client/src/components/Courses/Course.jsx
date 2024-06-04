import React, { useState, useEffect } from 'react';
import './Course.css';
import { useNavigate } from 'react-router-dom';
import { CiShare1 } from "react-icons/ci";
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51PGDQKSEBnF3Dk58FPhrwUtCtA6Nw8IEpKKqU2KEqvXOZjn17lzdOx1h7HahMbp7s6ap5icz4BAnOpkyjtGlUGJS00wmPj4Kr2');

const CheckoutForm = ({ productId, onPaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState({
    line1: '',
    line2: '',
    city: '',
    state: '',
    postal_code: '',
    country: 'IN',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
  
    if (!stripe || !elements) {
      setIsLoading(false);
      return;
    }
  
    const cardElement = elements.getElement(CardElement);
  
    try {
      const { paymentMethod, error: paymentMethodError } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });
  
      if (paymentMethodError) {
        setError(paymentMethodError.message);
        setIsLoading(false);
        return;
      }
  
      const response = await fetch('http://localhost:3001/products/create-subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
          customerName,
          customerAddress,
          priceId: 'price_1PNYz9SEBnF3Dk58ToFiO8qi', // Replace with your actual price ID
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create subscription');
      }
  
      const { clientSecret, subscriptionId } = await response.json();
  
      const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id,
      });
  
      if (confirmError) {
        setError(confirmError.message);
        setIsLoading(false);
        return;
      }
  
      if (paymentIntent.status === 'requires_action' || paymentIntent.status === 'requires_confirmation') {
        const { error: handleActionError, paymentIntent: handledPaymentIntent } = await stripe.handleCardAction(clientSecret);
  
        if (handleActionError) {
          setError(handleActionError.message);
          setIsLoading(false);
          return;
        }
  
        if (handledPaymentIntent.status === 'succeeded') {
          onPaymentSuccess(productId);
          setSuccess(true);
          setIsLoading(false);
        } else {
          setError('Subscription failed');
        }
      } else if (paymentIntent.status === 'succeeded') {
        onPaymentSuccess(productId);
        setSuccess(true);
        setIsLoading(false);
      } else {
        setError('Subscription failed');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <input
        type="text"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        placeholder="Enter customer name"
      />
      <input
        type="text"
        value={customerAddress.line1}
        onChange={(e) => setCustomerAddress({ ...customerAddress, line1: e.target.value })}
        placeholder="Address line 1"
      />
      <input
        type="text"
        value={customerAddress.line2}
        onChange={(e) => setCustomerAddress({ ...customerAddress, line2: e.target.value })}
        placeholder="Address line 2"
      />
      <input
        type="text"
        value={customerAddress.city}
        onChange={(e) => setCustomerAddress({ ...customerAddress, city: e.target.value })}
        placeholder="City"
      />
      <input
        type="text"
        value={customerAddress.state}
        onChange={(e) => setCustomerAddress({ ...customerAddress, state: e.target.value })}
        placeholder="State"
      />
      <input
        type="text"
        value={customerAddress.postal_code}
        onChange={(e) => setCustomerAddress({ ...customerAddress, postal_code: e.target.value })}
        placeholder="Postal Code"
      />
      <button type="submit" disabled={!stripe || isLoading} style={{ background: "black" }}>
        {isLoading ? 'Processing...' : 'Subscribe'}
      </button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {success && <div style={{ color: 'green' }}>Subscription succeeded!</div>}
    </form>
  );
};

const Course = () => {
  const [products, setProducts] = useState([]);
  const [enrollmentStatus, setEnrollmentStatus] = useState({});
  const [selectedProductId, setSelectedProductId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/products/getCourse');
        const data = await response.json();
        setProducts(data);

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

  const handleEnroll = (productId) => {
    const token = localStorage.getItem('token');

    if (!token) {
      window.alert('You need to be logged in to enroll');
      navigate('/login');
      return;
    }

    setSelectedProductId(productId);
  };

  const handlePaymentSuccess = async (productId) => {
    const token = localStorage.getItem('token');

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
      {selectedProductId && (
        <Elements stripe={stripePromise}>
          <CheckoutForm productId={selectedProductId} onPaymentSuccess={handlePaymentSuccess} />
        </Elements>
      )}
    </div>
  );
};

export default Course;
