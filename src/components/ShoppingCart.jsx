import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductFromCar, getAddProduct, purchaseProductCAr, updateProductFromCart } from '../store/slices/ProductCar.slice';
import { setShooping } from '../store/slices/shoopingTrue.slice';
// import { getProductsThunk } from "../store/slices/products.slice";
import '../styles/navbar/ShoopingCart.css'

const ShoppingCart = () => {

  const dispatch = useDispatch();
  const ProductsCars = useSelector(state => state.ProductCar);
  // const shooping = useSelector(state => state.shooping)
  const [amountProduct, setAmountProduct] = useState(1);
  const [indexProduct, setIndexProduct] = useState(0);

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
    dispatch(deleteProductFromCar(id))
  }

  const purchaseProduct = () =>{
    dispatch(purchaseProductCAr())
  }

  const prods = () => {
    const rsMul = []
    ProductsCars.map(prod => {
      rsMul.push(prod.price * prod.productsInCart?.quantity)
    })
    const resultado = rsMul.reduce((a,b) => a+b,0);
    return resultado  
  }

  const contentProductsMenos = (index) => {
      setAmountProduct(amountProduct - 1)
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
            ProductsCars.map((prod, index) => (
              <div key={prod.id} className='shooping__cart'>
                <div className='shooping__cart--productInfo'>
                  <div className='shooping__cart--productInfo-content'>
                    <div className='shooping__cart--productInfo-title'>
                      <h3>{prod.title}</h3>
                      <b>X{prod.productsInCart?.quantity}</b>
                    </div>
                    <div className='shooping__cart--productInfo-contador'>
                      {/* este boton elimina el product */}
                      <button onClick={() => contentProductsMenos(index)} disabled={amountProduct <= 0}
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
                    <i className="fa-solid fa-circle-check" onClick={() => updateProductCar(prod.id, prod.productsInCart?.quantity )}></i>
                    <i className="fa-solid fa-trash" onClick={() => deleteProductCar(prod.productsInCart?.productId)}></i> 
                  </div>
                  <p>Total: <b>$ {(prod.price * prod.productsInCart?.quantity)}</b></p>
                </div>
              </div>
            ))
          }
        </div>
        <div className='shooping__container--checkout'> 
          <div className='f'>
            <div className='shooping__container--checkout-total'>
              <p>Total: </p>
              <b>$ {prods()}</b>
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