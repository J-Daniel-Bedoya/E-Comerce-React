import { createSlice } from '@reduxjs/toolkit';
  
export const isLogoutSlice = createSlice({
  name: 'isLogout',
  initialState: true,
  reducers: {
    setIsLogout: (state, actions) => {
      return actions.payload
    }
  }
})
  
export const { setIsLogout } = isLogoutSlice.actions;
export default isLogoutSlice.reducer;