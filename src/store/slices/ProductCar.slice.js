import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
  // agrege este slice para poder enviar la información del producto al componente de shooping y consumir la de forma rapida 

export const ProductCarSlice = createSlice({
  name: 'ProductCarSlice',
  initialState: [],
  reducers: {
    
    setcar: (state, actions) => { 
      return actions.payload
    }
  }
})

export const getAddProduct = () => dispatch => {
    axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/cart`, getConfig())
    .then(res => {
      dispatch(setcar(res.data.data.cart.products))
    })
    .catch(() => alert("no existen productos en el carrito"))
}
export const addProductCar =  (data) => dispatch => {
    axios.post(`https://ecommerce-api-react.herokuapp.com/api/v1/cart`, data, getConfig())
      .then(() => {
        dispatch(getAddProduct())
        alert(`producto agregado`)
      })
      .catch((Error) => {
        alert(`error al agregar un producto al carrito`)
        console.log(Error)
      })
}
export const deleteProductFromCar = (id) => dispatch => {
  axios.delete(`https://ecommerce-api-react.herokuapp.com/api/v1/cart/${id}`, getConfig())
  .then(() => {
    dispatch(getAddProduct())
    alert(`el producto se elimino correctamente`)
  })
  .catch((Error) => {
    alert(`error al eliminar un producto al carrito`)
    console.log(Error)
  })
}
export const updateProductFromCart = (data) => dispatch => {
  axios.patch("https://ecommerce-api-react.herokuapp.com/api/v1/cart", data, getConfig())
  .then(() => {
    dispatch(getAddProduct())
    alert(`el producto se actualizado correctamente`)
  })
  .catch((Error) => {
    alert(`error al actualizar un producto al carrito`)
    console.log(Error)
  })
}

export const purchaseProductCAr = () => dispatch => {
  axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/purchases", {}, getConfig())
  .then(() => {
    dispatch(getAddProduct())
    alert(`has comprado el producto correctamente`)
  })
  .catch((Error) => {
    alert(`error al comprar los productos del carrito`)
    console.log(Error)
  })
}

export const { setcar } = ProductCarSlice.actions;
export default ProductCarSlice.reducer;



/*
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
  // agrege este slice para poder enviar la información del producto al componente de shooping y consumir la de forma rapida 

export const addProductSlice = createSlice({
  name: 'addProduct',
  initialState: JSON.parse(localStorage.getItem("procutCartPrice")),
  reducers: {
    setAddProduct: (state, actions) => {
      const f = JSON.parse(localStorage.getItem("procutCartPrice"))
      if (f === null) {
        state = [actions.payload]
      }
      const prod = [...state]
      prod.push(actions.payload)
      if (prod[0].id === prod[1].id){
        const l = prod.splice(0, 1)
        localStorage.setItem("procutCartPrice", JSON.stringify(l))
      }else{
        localStorage.setItem("procutCartPrice", JSON.stringify(prod))
      }
      console.log(prod)
      return prod
    }
  }
})
  
export const getSetAddProduct = (addProductId) => dispatch => {
    axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${addProductId}`)
    .then(res => {
      dispatch(setAddProduct(res.data.data.product))
    })
  
}

export const { setAddProduct } = addProductSlice.actions;
export default addProductSlice.reducer;d


*/