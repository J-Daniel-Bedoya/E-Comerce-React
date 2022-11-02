import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/Purchases/Purchases.css'
import { purchasesThunk } from '../store/slices/purchases.slice';
import Fecha from '../components/Fecha';
import { useState } from 'react';

const Purchases = () => {
  
  const dispatch = useDispatch()
  const purchases = useSelector(state => state.purchases)
  const [products, setProducts] = useState([])
  useEffect(() => {
    dispatch(purchasesThunk())
  }, [])
  
  useEffect(() => {
    axios
      .get(
        "https://ecommerce-api-react.herokuapp.com/api/v1/products"
      )
      .then((res) => {
        setProducts(res.data.data.products);
      });
  }, []);

  return (
    <div className='Container__Purchases'>
      <h1 className='purchases__title' >Purchases</h1>
      {
        purchases.map(purchase => (
          
          <div className='card__purchases' key={purchase.id}>
          { /* console.log(purchase)*/}
            <Fecha purchaseDate={purchase?.createdAt} />
            <div className='card__purchases--content'>
              {
                purchase.cart.products?.map(product => (
                  <div  className='card__product--purchases' key={product.id}> {/* este es mas es container que contiene la info del produto que compro */}
                    <div className='img__products--purchases' 
                      style={{'backgroundImage': `url(${products[product.id-1]?.productImgs[0]})`}}>
                    </div>
                    <div className='product__title--purchases' >
                      <p>{product.title}</p>
                    </div>
                    <b className='product__quantity--purchases' > {product.productsInCart.quantity} </b>
                    <p className='price__product' ><b>$</b> {product.price * product.productsInCart.quantity}  </p>
                  </div> 
                ))
              }
            </div>
          </div>
        ))
      }

    </div>  
  );
};

export default Purchases;