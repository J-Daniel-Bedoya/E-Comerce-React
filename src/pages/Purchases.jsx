import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/Purchases/Purchases.css'
import { purchasesThunk } from '../store/slices/purchases.slice';
import Fecha from '../components/Fecha';
const Purchases = () => {
    const dispatch = useDispatch()
    
    const purchases = useSelector(state => state.purchases)
    
  useEffect(() => {
    dispatch(purchasesThunk())
  }, [])
  

//toDateString()
  //const date = purchases[0]?.createdAt
  //console.log(date?.toDateString());

  return (
    <div className='Container__Purchases'>
      <h1 className='purchases__title' >Purchases</h1>
      {
        purchases.map(purchase => (
          
          <div className='card__purchases' key={purchase.id}>
          { /* console.log(purchase)*/}
            <Fecha purchaseDate={purchase?.createdAt} />
            {
              purchase.cart.products?.map(product => (
                <div  className='card__product--purchases' key={product.id}> {/* este es mas es container que contiene la info del produto que compro */}
                  <p className='product__title--purchases' > {product.title}</p>
                  <b className='product__quantity--purchases' > {product.productsInCart.quantity} {/* aca esta la cantidad de productos que compro */} </b>
                  <p className='' > $ {product.price * product.productsInCart.quantity}  {/* este es el total de cuanto de la cantidades que compro aun nose cuanto poner pq solo son unas compras pero si requiere funcionaliad que cambie yo la hago facilmente (product.price * product.productsInCart.quantity ) */} </p>
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