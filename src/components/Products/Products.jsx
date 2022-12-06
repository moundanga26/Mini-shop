
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import React, { useState, useEffect } from "react";

import Product from './Product/Product';
import useStyles from './styles';

const Products = ({basket, chaussures, products, onAddToCart }) => {
  const classes = useStyles();
  
  const deleteStudent=(id_Chaussures)=>{
    const filteredStudents=chaussures.filter((element,index)=>{
      return element.id_Chaussures === id_Chaussures});
      localStorage.clear()
      basket.push(filteredStudents[0])
      console.log(basket)
      localStorage.setItem('panier', JSON.stringify(basket))


  };

  if (!products.length) return <p>Chargement...</p>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {chaussures.map((product) => (
          <Grid key={product.id_Chaussures} item xs={12} sm={6} md={4} lg={3}>
            <Product panier={()=>deleteStudent(product.id_Chaussures)} id={product.id_Chaussures} image={product.images}  prix={product.prix} name={product.nom_chaussure} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

