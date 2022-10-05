import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductFromCar, getAddProduct, updateProductFromCart } from '../store/slices/ProductCar.slice';
import { setShooping } from '../store/slices/shoopingTrue.slice';
import { getProductsThunk } from "../store/slices/products.slice";
import '../styles/navbar/ShoopingCart.css'

const ShoppingCart = () => {
  const dispatch = useDispatch()
  const ProductsCars = useSelector(state => state.ProductCar)
  const [amountProduct, setAmountProduct] = useState(1)

  useEffect(() => {
    dispatch(getAddProduct())
  }, [])



  //actualizamos la cantidad de product
  const updateProductCar = (id, quantity) =>{
    const dataProduct = {
      id,
      newQuantity: quantity + amountProduct
    } // este objeto trae la catidad de productos y el id
    dispatch(updateProductFromCart(dataProduct))
  }


  // eliminamos el producto
  const deleteProductCar = (id) => {
    //alert(id)
    dispatch(deleteProductFromCar(id))
  }

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
            ProductsCars.map(prod => (
              // console.log(prod),
              <div key={prod.id} className='shooping__cart'>
                {/*<div className='shooping__cart--img'></div>*/}
                <div className='shooping__cart--productInfo'>
                  <h3>{prod.title}  (x{prod.productsInCart?.quantity}) </h3>
                  <p><b>$</b>{(prod.price * prod.productsInCart?.quantity)}</p>
                  <button onClick={() => deleteProductCar(prod.productsInCart?.productId)} > eliminar </button> {/* este boton elimina el product */}
                  <button onClick={() => setAmountProduct(amountProduct - 1)}
                  >
                    - 1
                  </button>
                  <b>
                    { amountProduct} {/* la cantidad de productos que quiere agregar */}
                  </b>
                  <button onClick={() => setAmountProduct(amountProduct + 1)}  >
                    + 1
                  </button >
                  <button onClick={() => updateProductCar(prod.id, prod.productsInCart?.quantity )} > Actualizar </button>
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