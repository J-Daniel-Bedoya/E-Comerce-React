import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/Purchases/Purchases.css'
import { purchasesThunk } from '../store/slices/purchases.slice';

const Purchases = () => {
    const dispatch = useDispatch()
    
    const purchases = useSelector(state => state.purchases)
    
  useEffect(() => {
    dispatch(purchasesThunk())
  }, [])
  // bueno jose este los estilos de aca solo son para ver lo que yo pongo ya tu los cambiarias para que quede ps lo mejor que se pueda
  return (
    <div style={{height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <h1>Purchases</h1>
      {
        purchases.map(purchase => (
          <div  key={purchase.id} style={{border: "1px solid black", margin: "1rem 0", display: "flex", flexDirection: "column", alignItems: "center", width: "75%"}}>
            <div style={{border: "1px solid black", width: "100%", height: "50px", marginBottom: "1rem", background: "hsl(257, 83%, 12%)", color: "white"}}>fecha</div>
            {
              purchase.cart.products?.map(product => (
                <div style={{marginBottom: "1.5rem", display: 'flex', alignItems: "center", width: "60%",  justifyContent: "space-between"}}  key={product.id}> {/* este es mas es container que contiene la info del produto que compro */}
                  <p> {product.title} hola </p>
                  <b> {product.productsInCart.quantity} {/* aca esta la cantidad de productos que compro */} </b>
                  <p> ${product.price}  {/* este es el total de cuanto de la cantidades que compro aun nose cuanto poner pq solo son unas compras pero si requiere funcionaliad que cambie yo la hago facilmente (product.price * product.productsInCart.quantity ) */} </p>
                </div>
              ))
            }
          </div>
        ))
      }

    </div>
  );
};

export default Purchases;