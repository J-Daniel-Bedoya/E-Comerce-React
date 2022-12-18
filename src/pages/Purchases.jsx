import React, { useEffect } from 'react';
import '../styles/Purchases/Purchases.css'
import Fecha from '../components/Fecha';
import { useDispatch, useSelector } from 'react-redux';
import { purchasesThunk } from '../store/slices/purchases.slice';
import { useNavigate } from 'react-router-dom';

const Purchases = () => {
  
  const dispatch = useDispatch();
  const purchases = useSelector(state => state.purchases);
  const navigate = useNavigate()

  const userId = localStorage.getItem("userId");
  useEffect(() => {
    dispatch(purchasesThunk(userId));
  }, [])
  
  console.log(purchases)

  return (
    <div className='Container__Purchases'>
      <h1 className='purchases__title' >Purchases</h1>
      {
        purchases.purchased.length !== 0 ? (
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
        ) : (
          <div className='purchases__products--comprados'>
            <h2>¡Bienvenido!. Aquí veras todos tus productos comprados.</h2>
            <h4>Si aun no te haz registrado</h4>
            <button onClick={() => navigate("/login")}>¡REGISTRATE!</button>
          </div>
        ) 
      }
    </div>  
  );
};

export default Purchases;