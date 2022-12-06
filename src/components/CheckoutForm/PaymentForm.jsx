// import React from 'react';
// import { Typography, Button, Divider } from '@material-ui/core';
// import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';

// import Review from './Review';

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

// const PaymentForm = ({ checkoutToken, nextStep, backStep, shippingData, onCaptureCheckout }) => {
//   const handleSubmit = async (event, elements, stripe) => {
//     event.preventDefault();

//     if (!stripe || !elements) return;

//     const cardElement = elements.getElement(CardElement);

//     const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });

//     if (error) {
//       console.log('[error]', error);
//     } else {
//       const orderData = {
//         line_items: checkoutToken.live.line_items,
//         customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
//         shipping: { name: 'International', street: shippingData.address1, town_city: shippingData.city, county_state: shippingData.shippingSubdivision, postal_zip_code: shippingData.zip, country: shippingData.shippingCountry },
//         fulfillment: { shipping_method: shippingData.shippingOption },
//         payment: {
//           gateway: 'stripe',
//           stripe: {
//             payment_method_id: paymentMethod.id,
//           },
//         },
//       };

//       onCaptureCheckout(checkoutToken.id, orderData);

//       nextStep();
//     }
//   };

//   return (
//     <>
//       <Review checkoutToken={checkoutToken} />
//       <Divider />
//       <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>Payment method</Typography>
//       <Elements stripe={stripePromise}>
//         <ElementsConsumer>{({ elements, stripe }) => (
//           <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
//             <CardElement />
//             <br /> <br />
//             <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//               <Button variant="outlined" onClick={backStep}>Back</Button>
//               <Button type="submit" variant="contained" disabled={!stripe} color="primary">
//                 Pay {checkoutToken.live.subtotal.formatted_with_symbol}
//               </Button>
//             </div>
//           </form>
//         )}
//         </ElementsConsumer>
//       </Elements>
//     </>
//   );
// };

// export default PaymentForm;



 import React from 'react';
 import { Typography, Button, Divider } from '@material-ui/core';
 import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
 import { loadStripe } from '@stripe/stripe-js';

 import Review from './Review';



import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
