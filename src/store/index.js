import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './slices/products.slice';
import shoopingTrueSlice from './slices/shoopingTrue.slice';
import ProductCarSlice from './slices/ProductCar.slice';
import purchasesSlice from './slices/purchases.slice';
import isLogoutSlice from './slices/isLogout.slice';

export default configureStore({
  reducer: {
    products: productsSlice,
    shooping: shoopingTrueSlice,
    ProductCar: ProductCarSlice,
    purchases: purchasesSlice,
    isLogout: isLogoutSlice,
  }
})