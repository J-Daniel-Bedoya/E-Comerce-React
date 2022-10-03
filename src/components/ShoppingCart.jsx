import React from 'react';
import { useDispatch } from 'react-redux';
import { setShooping } from '../store/slices/shoopingTrue.slice';
import '../styles/navbar/ShoopingCart.css'

const ShoppingCart = () => {
  const dispatch = useDispatch()
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
          <div className='shooping__cart'>
            <div className='shooping__cart--img'></div>
            <div className='shooping__cart--productInfo'>
              <h3>info name product</h3>
              <p><b>$</b> 20000</p>
            </div>
          </div>
          <div className='shooping__cart'>
            <div className='shooping__cart--img'></div>
            <div className='shooping__cart--productInfo'>
              <h3>info name product</h3>
              <p><b>$</b> 20000</p>
            </div>
          </div>
          <div className='shooping__cart'>
            <div className='shooping__cart--img'></div>
            <div className='shooping__cart--productInfo'>
              <h3>info name product</h3>
              <p><b>$</b> 20000</p>
            </div>
          </div>
          <div className='shooping__cart'>
            <div className='shooping__cart--img'></div>
            <div className='shooping__cart--productInfo'>
              <h3>info name product</h3>
              <p><b>$</b> 20000</p>
            </div>
          </div>
          <div className='shooping__cart'>
            <div className='shooping__cart--img'></div>
            <div className='shooping__cart--productInfo'>
              <h3>info name product</h3>
              <p><b>$</b> 20000</p>
            </div>
          </div>
          <div className='shooping__cart'>
            <div className='shooping__cart--img'></div>
            <div className='shooping__cart--productInfo'>
              <h3>info name product</h3>
              <p><b>$</b> 20000</p>
            </div>
          </div>
          <div className='shooping__cart'>
            <div className='shooping__cart--img'></div>
            <div className='shooping__cart--productInfo'>
              <h3>info name product</h3>
              <p><b>$</b> 20000</p>
            </div>
          </div>
          <div className='shooping__cart'>
            <div className='shooping__cart--img'></div>
            <div className='shooping__cart--productInfo'>
              <h3>info name product</h3>
              <p><b>$</b> 20000</p>
            </div>
          </div>
          <div className='shooping__cart'>
            <div className='shooping__cart--img'></div>
            <div className='shooping__cart--productInfo'>
              <h3>info name product</h3>
              <p><b>$</b> 20000</p>
            </div>
          </div>
          <div className='shooping__cart'>
            <div className='shooping__cart--img'></div>
            <div className='shooping__cart--productInfo'>
              <h3>info name product</h3>
              <p><b>$</b> 20000</p>
            </div>
          </div>
          <div className='shooping__cart'>
            <div className='shooping__cart--img'></div>
            <div className='shooping__cart--productInfo'>
              <h3>info name product</h3>
              <p><b>$</b> 20000</p>
            </div>
          </div>
        </div>
        <div className='shooping__container--checkout'>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;