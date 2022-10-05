import { createSlice } from '@reduxjs/toolkit';
  
export const shoopingTrueSlice = createSlice({
  name: 'shooping',
  initialState: false,
  reducers: {
    setShooping: (state) => {
      return !state
    }
  }
})
  
export const { setShooping } = shoopingTrueSlice.actions;
export default shoopingTrueSlice.reducer;