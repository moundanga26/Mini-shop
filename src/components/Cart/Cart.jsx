import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const Cart = ({chaussures,setbasket, basket, cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const classes = useStyles();
console.log(basket);
  const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">Vous n'avez aucun article dans votre panier,
      <Link className={classes.link} to="/">commencer à en ajouter</Link>!
    </Typography>
  );


  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {basket.map((lineItem) => (
          <Grid item xs={12} sm={4} key={lineItem.id_Chaussures}>
            <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">Total: {cart.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Vider le Panier</Button>
          <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Vérifier</Button>
        </div>
      </div>
    </>
  );
var total = []
var sum = total[parseInt(total.length)-1]
  let arr = []
  for(let i = 0; i < basket.length; i++){
 

  
 arr.push(basket[i].prix)
 let add = function(arr) {
  return arr.reduce((a, b) => a + b, 0);
};

var sum = add(arr);
  console.log(sum)
  total.push(sum)
  };
  function vider () {
    localStorage.clear()
    setbasket([])
  }



  
    return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>Votre panier</Typography>
      <Grid container spacing={3}>
        {basket.map((lineItem) => (
          <Grid item xs={12} sm={4} key={lineItem.id_Chaussures}>
            {/* <CartItem deleteshoe= {()=>deleteStudent(lineItem.id_Chaussures)} item= {lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} /> */}
            <CartItem  item= {lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">Total: {sum} </Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={vider}> Vider le Panier</Button>
          <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">vérifier</Button>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
