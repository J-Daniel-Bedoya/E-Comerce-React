import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './slices/products.slice'  


export default configureStore({
  reducer: {
    products: productsSlice
  }
})