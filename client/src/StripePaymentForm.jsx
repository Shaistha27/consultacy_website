import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51PGDQKSEBnF3Dk58FPhrwUtCtA6Nw8IEpKKqU2KEqvXOZjn17lzdOx1h7HahMbp7s6ap5icz4BAnOpkyjtGlUGJS00wmPj4Kr2');

const StripeSubscription = () => {
  // const stripe = useStripe();
  // const elements = useElements();
  // const [error, setError] = useState(null);
  // const [success, setSuccess] = useState(false);
  // const [customerName, setCustomerName] = useState('');
  // const [customerAddress, setCustomerAddress] = useState({
  //   line1: '',
  //   line2: '',
  //   city: '',
  //   state: '',
  //   postal_code: '',
  //   country: 'IN',
  // });
  // const [isLoading, setIsLoading] = useState(false);

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   setIsLoading(true);

  //   if (!stripe || !elements) {
  //     setIsLoading(false);
  //     return;
  //   }

  //   const cardElement = elements.getElement(CardElement);

  //   try {
  //     const { paymentMethod, error: paymentMethodError } = await stripe.createPaymentMethod({
  //       type: 'card',
  //       card: cardElement,
  //       billing_details: {
  //         name: customerName,
  //       },
  //     });

  //     if (paymentMethodError) {
  //       setError(paymentMethodError.message);
  //       setIsLoading(false);
  //       return;
  //     }

  //     const response = await fetch('/products/create-subscription', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({
  //         paymentMethodId: paymentMethod.id,
  //         customerName,
  //         customerAddress,
  //         priceId: 'price_1PNYz9SEBnF3Dk58ToFiO8qi', // replace with your price ID
  //       }),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Failed to create subscription');
  //     }

  //     const { clientSecret } = await response.json();

  //     const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret);

  //     if (confirmError) {
  //       setError(confirmError.message);
  //       setIsLoading(false);
  //       return;
  //     }

  //     if (paymentIntent.status === 'succeeded') {
  //       setSuccess(true);
  //     } else {
  //       setError('Subscription failed');
  //     }
  //   } catch (err) {
  //     setError(err.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // return (
  //   <form onSubmit={handleSubmit} style={{marginTop:"300px"}}>
  //     <CardElement />
  //     <input
  //       type="text"
  //       value={customerName}
  //       onChange={(e) => setCustomerName(e.target.value)}
  //       placeholder="Enter customer name"
  //     />
  //     <input
  //       type="text"
  //       value={customerAddress.line1}
  //       onChange={(e) => setCustomerAddress({ ...customerAddress, line1: e.target.value })}
  //       placeholder="Address line 1"
  //     />
  //     <input
  //       type="text"
  //       value={customerAddress.line2}
  //       onChange={(e) => setCustomerAddress({ ...customerAddress, line2: e.target.value })}
  //       placeholder="Address line 2"
  //     />
  //     <input
  //       type="text"
  //       value={customerAddress.city}
  //       onChange={(e) => setCustomerAddress({ ...customerAddress, city: e.target.value })}
  //       placeholder="City"
  //     />
  //     <input
  //       type="text"
  //       value={customerAddress.state}
  //       onChange={(e) => setCustomerAddress({ ...customerAddress, state: e.target.value })}
  //       placeholder="State"
  //     />
  //     <input
  //       type="text"
  //       value={customerAddress.postal_code}
  //       onChange={(e) => setCustomerAddress({ ...customerAddress, postal_code: e.target.value })}
  //       placeholder="Postal Code"
  //     />
  //     <button type="submit" disabled={!stripe || isLoading} style={{background:"black"}}>
  //       {isLoading ? 'Processing...' : 'Subscribe'}
  //     </button>
  //     {error && <div style={{ color: 'red' }}>{error}</div>}
  //     {success && <div style={{ color: 'green' }}>Subscription succeeded!</div>}
  //   </form>
  // );
};

const App = () => (
  <Elements stripe={stripePromise}>
    <StripeSubscription />
  </Elements>
);

export default App;