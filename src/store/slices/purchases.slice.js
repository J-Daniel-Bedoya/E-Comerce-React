import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';

const apiPurchase = "https://api-e-commerce-production.up.railway.app/api/v1";

export const purchasesSlice = createSlice({
    name: 'purchases',
    initialState: {},
    reducers: {
      purchasesSet: (state, action) =>{
        console.log(action.payload)
        return action.payload
      }
    }
})

export const purchasesThunk = (userId) => (dispatch) => {
  axios.get(`${apiPurchase}/users/${userId}/orders`, getConfig())
    .then((res) => {
      dispatch(purchasesSet(res.data))
      // console.log(res)
    })
    .catch((err) => {
      throw(err)
    })
}


export const { purchasesSet } = purchasesSlice.actions;

export default purchasesSlice.reducer;

/// el getConfi es la configuracion del token