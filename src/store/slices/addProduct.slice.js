import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
  // agrege este slice para poder enviar la información del producto al componente de shooping y consumir la de forma rapida 

export const addProductSlice = createSlice({
  name: 'addProduct',
  initialState: [],
  reducers: {
    
    setAddProduct: (state, actions) => {
      return actions.payload
    }
  }
})

export const getAddProduct = () => dispatch => {
    axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/cart`, getConfig())
    .then(res => {
      dispatch(setAddProduct(res.data.data))
    })
}



export const { setAddProduct } = addProductSlice.actions;
export default addProductSlice.reducer;



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