import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './slices/products.slice'  
import shoopingTrueSlice from './slices/shoopingTrue.slice'

export default configureStore({
  reducer: {
    products: productsSlice,
    shooping: shoopingTrueSlice,
  }
})