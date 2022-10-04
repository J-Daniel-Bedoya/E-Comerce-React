import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './slices/products.slice'  
import shoopingTrueSlice from './slices/shoopingTrue.slice'
<<<<<<< HEAD
import addProductSlice from './slices/addProduct.slice'


=======
import purchasesSlice from './slices/purchases.slice'
>>>>>>> 23a0bbfd0c7d0e9bfcf592b5f7d6edbb373211fc
export default configureStore({
  reducer: {
    products: productsSlice,
    shooping: shoopingTrueSlice,
<<<<<<< HEAD
    addProduct: addProductSlice,
=======
    purchases: purchasesSlice
>>>>>>> 23a0bbfd0c7d0e9bfcf592b5f7d6edbb373211fc
  }
})