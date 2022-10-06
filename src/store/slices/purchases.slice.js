import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';

export const purchasesSlice = createSlice({
    name: 'purchases',
    initialState: [],
    reducers: {
      purchasesSet: (state, action) =>{
        return action.payload
      }
    }
})

export const purchasesThunk = () => (dispatch) => {
    return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/purchases", getConfig())
        .then((res) => dispatch(purchasesSet(res.data.data.purchases)))
}

export const { purchasesSet } = purchasesSlice.actions;

export default purchasesSlice.reducer;

/// el getConfi es la configuracion del token