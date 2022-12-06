
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import useStyles from './styles';

const Product = ({panier, id, image,prix,name, product, onAddToCart }) => {
  const classes = useStyles();

  const handleAddToCart = () => onAddToCart(id, 1);


  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} title={name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {prix}Fcfa
          </Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Ajouter au chariot" onClick={panier}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;

