import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51I7URUJk62dLO66cWyss3m3rS5a5kvaNvIrWQJqukw4WGHLAvYKc2iQxjTASv2IOUmw62MSrFUYP16NgPNfp7jgr00RIgctI7K';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }
  return (
    <StripeCheckout
      label='Pay Now'
      name='OldNewLook'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;
