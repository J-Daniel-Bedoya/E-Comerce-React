import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useDispatch } from 'react-redux';
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
    //dispatch(setIsLoading(true));
    //const token = localStorage.getItem("token")
    return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/purchases", getConfig())
        .then((res) => dispatch(purchasesSet(res.data.data.purchases)))
        //.finally(() => dispatch(setIsLoading(false)));
}

export const { purchasesSet } = purchasesSlice.actions;

export default purchasesSlice.reducer;

/// el getConfi es la configuracion del token