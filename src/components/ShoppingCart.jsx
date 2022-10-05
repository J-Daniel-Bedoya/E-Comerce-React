import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAddProduct } from '../store/slices/addProduct.slice';
import { setShooping } from '../store/slices/shoopingTrue.slice';
import '../styles/navbar/ShoopingCart.css'

const ShoppingCart = () => {
  const dispatch = useDispatch()
  const addProduct = useSelector(state => state.addProduct)



  console.log(addProduct)

  useEffect(() => {
    dispatch(getAddProduct())
  }, [])
  // console.log(addProduct)

  return (
    <div>
      <div className='container--shooping' onClick={() => dispatch(setShooping())}></div>
      <div className='shooping'>
        <div className='shooping__card--imgCircle'>
          <div className='shooping__card--container-logo'>
            <div className='shooping__card--img'></div>
            <h5>Cart</h5>
          </div>
        </div>
        <div className='shooping__container--products'>
            {
              // trueProduct ? (
                addProduct.cart?.products?.map(prod => (
                 // console.log(prod),
                  <div key={prod.id} className='shooping__cart'>
                    <div className='shooping__cart--img'></div>
                    <div className='shooping__cart--productInfo'>
                      <h3>{prod.title}</h3>
                      <p><b>$</b>{ prod.price}</p>
                    </div>
                  </div>
                ))
                // ) : (
                //   productsActual?.map(prod => (
                //     console.log(prod),
                //     <div className='shooping__cart'>
                //       <div className='shooping__cart--img' style={{backgroundImage: `url(${prod.productImgs?.[1]})`}}></div>
                //       <div className='shooping__cart--productInfo'>
                //         <h3>{prod.title}</h3>
                //         <p><b>$</b> prod.price</p>
                //       </div>
                //     </div>
                //   ))
                // )
            }
        </div>
        <div className='shooping__container--checkout'>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;