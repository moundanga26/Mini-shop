// import React, { useState, useEffect } from 'react';
// import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
// import { useForm, FormProvider } from 'react-hook-form';
// import { Link } from 'react-router-dom';

// import { commerce } from '../../lib/commerce';
// import FormInput from './CustomTextField';

// const AddressForm = ({ checkoutToken, test }) => {
//   const [shippingCountries, setShippingCountries] = useState([]);
//   const [shippingCountry, setShippingCountry] = useState('');
//   const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
//   const [shippingSubdivision, setShippingSubdivision] = useState('');
//   const [shippingOptions, setShippingOptions] = useState([]);
//   const [shippingOption, setShippingOption] = useState('');
//   const methods = useForm();

//   const fetchShippingCountries = async (checkoutTokenId) => {
//     const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

//     setShippingCountries(countries);
//     setShippingCountry(Object.keys(countries)[0]);
//   };

//   const fetchSubdivisions = async (countryCode) => {
//     const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);

//     setShippingSubdivisions(subdivisions);
//     setShippingSubdivision(Object.keys(subdivisions)[0]);
//   };

//   const fetchShippingOptions = async (checkoutTokenId, country, stateProvince = null) => {
//     const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region: stateProvince });

//     setShippingOptions(options);
//     setShippingOption(options[0].id);
//   };

//   useEffect(() => {
//     fetchShippingCountries(checkoutToken.id);
//   }, []);

//   useEffect(() => {
//     if (shippingCountry) fetchSubdivisions(shippingCountry);
//   }, [shippingCountry]);

//   useEffect(() => {
//     if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
//   }, [shippingSubdivision]);

//   return (
//     <>
//       <Typography variant="h6" gutterBottom>Shipping address</Typography>
//       <FormProvider {...methods}>
//         <form onSubmit={methods.handleSubmit((data) => test({ ...data, shippingCountry, shippingSubdivision, shippingOption }))}>
//           <Grid container spacing={3}>
//             <FormInput required name="firstName" label="First name" />
//             <FormInput required name="lastName" label="Last name" />
//             <FormInput required name="address1" label="Address line 1" />
//             <FormInput required name="email" label="Email" />
//             <FormInput required name="city" label="City" />
//             <FormInput required name="zip" label="Zip / Postal code" />
//             <Grid item xs={12} sm={6}>
//               <InputLabel>Shipping Country</InputLabel>
//               <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
//                 {Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name })).map((item) => (
//                   <MenuItem key={item.id} value={item.id}>
//                     {item.label}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <InputLabel>Shipping Subdivision</InputLabel>
//               <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
//                 {Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name })).map((item) => (
//                   <MenuItem key={item.id} value={item.id}>
//                     {item.label}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <InputLabel>Shipping Options</InputLabel>
//               <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
//                 {shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})` })).map((item) => (
//                   <MenuItem key={item.id} value={item.id}>
//                     {item.label}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </Grid>
//           </Grid>
//           <br />
//           <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//             <Button component={Link} variant="outlined" to="/cart">Back to Cart</Button>
//             <Button type="submit" variant="contained" color="primary">Next</Button>
//           </div>
//         </form>
//       </FormProvider>
//     </>
//   );
// };

// export default AddressForm;




import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { commerce } from '../../lib/commerce';
import FormInput from './CustomTextField';
import  React from 'react';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
