import { createSlice } from '@reduxjs/toolkit';
import getConfig from '../../utils/getConfig';
import axios from 'axios';

const apiPurchase = "https://api-e-commerce-production.up.railway.app/api/v1";  

export const purchasesSlice = createSlice({
  name: 'purchases',
  initialState: [],
  reducers: {
    setPurchases: (state, actions) => {
      return actions.payload;
    }
  }
})

export const purchasesThunk = (userId) => dispatch => {
  axios.get(`${apiPurchase}/users/${userId}/orders`, getConfig())
    .then((res) => {
      dispatch(setPurchases(res.data))
    })
    .catch((err) => {
      throw(err)
    })
}
  
export const { setPurchases } = purchasesSlice.actions;
export default purchasesSlice.reducer;