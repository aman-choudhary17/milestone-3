import React, { useEffect } from 'react';

export const Paypal = ({ amount,handleShow,handlePlaceOrder }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=AQnF0FaKJsU7jw6Fgd_L0a2J7IIs36kND_j3TfNj9oLgvkO2MmxtxD_5lJ1ttjGCt_wqx9mFqp3mni-O&currency=USD`;
    script.addEventListener('load', () => {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: amount
              }
            }]
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then(details => {
            handleShow();
            handlePlaceOrder(amount)
            // alert(`Transaction completed by ${details.payer.name.given_name}`);
          });
        },
        onError: (err) => {
          console.error('An error occurred during the transaction', err);
        }
      }).render('#paypal-button-container');
    });
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [amount]);

  return (
    <div>
      <div id="paypal-button-container"></div>
    </div>
  );
};
