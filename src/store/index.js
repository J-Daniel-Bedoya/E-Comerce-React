import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './slices/products.slice'  
import shoopingTrueSlice from './slices/shoopingTrue.slice'

import addProductSlice from './slices/addProduct.slice'



import purchasesSlice from './slices/purchases.slice'

export default configureStore({
  reducer: {
    products: productsSlice,
    shooping: shoopingTrueSlice,
    addProduct: addProductSlice,
    purchases: purchasesSlice,

  }
})