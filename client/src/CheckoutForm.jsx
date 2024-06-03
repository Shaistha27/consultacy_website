import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import StripeCheckout from 'react-stripe-checkout'

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card: elements.getElement(CardElement),
//     });

//     if (error) {
//       setError(error.message);
//     } else {
//       const response = await fetch('/products/create-payment-intent', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ amount: 100 }),
//       });
//       console.log("response",response)
//       const paymentIntentData = await response.json();
//       const confirmResult = await stripe.confirmCardPayment(paymentIntentData.clientSecret);

//       if (confirmResult.error) {
//         setError(confirmResult.error.message);
//       } else {
//         setSuccess(true);
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       <button type="submit" disabled={!stripe}>Pay</button>
//       {error && <div>{error}</div>}
//       {success && <div>Payment Successful!</div>}
//     </form>
//   );
// };

const CheckoutForm = ()=>{
    <StripeCheckout stripeKey='pk_test_51PGDQKSEBnF3Dk58FPhrwUtCtA6Nw8IEpKKqU2KEqvXOZjn17lzdOx1h7HahMbp7s6ap5icz4BAnOpkyjtGlUGJS00wmPj4Kr2' token='' name='Enroll course' amount={100}>
        <button>enroll</button>
    </StripeCheckout>

}

export default CheckoutForm;
