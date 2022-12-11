import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiProd = "https://api-e-commerce-production.up.railway.app/api/v1/";

export const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setProducts: (state, actions) => {
      
      return actions.payload
    }
  }
})
  
export const getProductsThunk = () => dispatch => {
  axios.get(`${apiProd}/products`)
  .then(res => dispatch(setProducts(res.data)))
}

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;