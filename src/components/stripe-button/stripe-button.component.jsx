import React from 'react';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;

    return (
        <button>Pay Now</button>
    )
};

export default StripeCheckoutButton;