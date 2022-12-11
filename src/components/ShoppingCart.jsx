import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductFromCar, purchaseProductCart, updateProductFromCart } from '../store/slices/ProductCar.slice';
import { setShooping } from '../store/slices/shoopingTrue.slice';
import '../styles/navbar/ShoopingCart.css'

const ShoppingCart = () => {

  const dispatch = useDispatch();
  const ProductsCars = useSelector(state => state.ProductCar);
  const [amountProduct, setAmountProduct] = useState(1);
  const [indexProduct, setIndexProduct] = useState(0);
  const userId = localStorage.getItem("userId")
  
  const updateProductCar = (cartId, productId, quantity) =>{
    const dataProduct = {
      cartId,
      productId,
      quantity: quantity + amountProduct
    }
    dispatch(updateProductFromCart(userId, dataProduct))
    setAmountProduct(1)
  }

  // eliminamos el producto
  const deleteProductCar = (cartId, productId) => {
    const dataProduct = {
      cartId,
      productId,
    }
    dispatch(deleteProductFromCar(userId, dataProduct))
  }

  const purchaseProduct = () =>{
    dispatch(purchaseProductCart(userId))
  }


  const contentProductsMenos = (index) => {
    if (index === indexProduct) {
        setAmountProduct(amountProduct - 1)
      }else{
        setIndexProduct(index)
        setAmountProduct(-1)
      }
  }
  const contentProductsMas = (index) => {
    if (index === indexProduct) {
      setAmountProduct(amountProduct + 1)
    }else{
      setIndexProduct(index)
      setAmountProduct(1)
    }
  }

  return (
    <>
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
            ProductsCars?.products?.map((prod, index) => (
              <div key={prod.id} className='shooping__cart'>
                <div className='shooping__cart--productInfo'>
                  <div className='shooping__cart--productInfo-content'>
                    <div className='shooping__cart--productInfo-title'>
                      <h3>{prod.product.name}</h3>
                      <b>X{prod.quantity}</b>
                    </div>
                    <div className='shooping__cart--productInfo-contador'>
                      {/* este boton elimina el product */}
                      <button onClick={() => contentProductsMenos(index)} disabled={amountProduct <= -prod.quantity}
                      >
                        - 1
                      </button>
                      <b>
                        { index === indexProduct && amountProduct } {/* la cantidad de productos que quiere agregar */}
                      </b>
                      <button onClick={() => contentProductsMas(index)}  >
                        + 1
                      </button >
                    </div>
                  </div>
                  {/* botones de eliminar y de actualizar */}
                  <div className='shooping__cart--btns-deleteAndUpdate'>
                    <i className="fa-solid fa-circle-check" onClick={() => updateProductCar(ProductsCars.id, prod.product.id, prod.quantity )}></i>
                    <i className="fa-solid fa-trash" onClick={() => deleteProductCar(ProductsCars.id, prod.id)}></i> 
                  </div>
                  <p>Total: <b>$ {(prod.price)}</b></p>
                </div>
              </div>
            ))
          }
        </div>
        <div className='shooping__container--checkout'> 
          <div className='f'>
            <div className='shooping__container--checkout-total'>
              <p>Total: </p>
              <b>$ {ProductsCars?.totalPrice} USD</b>
            </div>
            <div>
              <button onClick={() => purchaseProduct()} >Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export  default ShoppingCart;