import React, { useEffect, useState } from 'react';
import '../styles/Purchases/Purchases.css'
import Fecha from '../components/Fecha';
import getConfig from '../utils/getConfig';
import axios from 'axios';

const Purchases = () => {
  

  const [purchases, setPurchases] = useState([]);
  const apiPurchase = "https://api-e-commerce-production.up.railway.app/api/v1";
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    axios.get(`${apiPurchase}/users/${userId}/orders`, getConfig())
    .then((res) => {
      setPurchases(res.data)
      console.log(res.data)
    })
    .catch((err) => {
      throw(err)
    })
  }, [])
  


  return (
    <div className='Container__Purchases'>
      <h1 className='purchases__title' >Purchases</h1>
      {
        purchases.purchased?.map((purchase,i) => (
          <div className='card__purchases' key={i}>
            <Fecha purchaseDate={purchase?.createdAt} />
            <div className='card__purchases--content'>
            {
              purchase.orders.map((order,i) => (
                <div  className='card__product--purchases' key={i}> {/* este es mas es container que contiene la info del produto que compro */}
                  <div className='img__products--purchases' 
                    style={{'backgroundImage': `url(${order.images?.[0]})`}}
                    >
                  </div>
                  <div className='product__title--purchases' >
                    <p>{
                    order.nameProduct
                    }</p>
                  </div>
                  <b className='product__quantity--purchases' > {
                  order.quantity
                  } </b>
                  <p className='price__product' ><b>$</b> {
                  order.price
                  }  </p>
                </div> 
              ))
            }

            </div>
          </div>
            
        ))
      }
      {/* <div className='table__purchases--footer'>
        <p>Total products purchased: <b>{quantityTotal}</b></p>
        <p>Total money spent: <b>$ {totalPrice}</b></p>
      </div> */}
    </div>  
  );
};

export default Purchases;