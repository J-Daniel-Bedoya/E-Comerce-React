import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import Swal from 'sweetalert2';
import getConfig from '../../utils/getConfig';
import { setShooping } from './shoopingTrue.slice';

const apiCard = "https://api-e-commerce-production.up.railway.app/api/v1";

export const ProductCarSlice = createSlice({
  name: 'ProductCarSlice',
  initialState: {},
  reducers: {
    setcar: (state, actions) => { 
      return actions.payload
    }
  }
})


export const getAddProduct = (id) => dispatch => {
    axios.get(`${apiCard}/users/${id}/cart`, getConfig())
    .then(res => {
      dispatch(setcar(res.data))
    })
    .catch((res) => {
      console.log("NO hay productos en el carrito")
    })
}
export const addProductCar =  (userId, data) => dispatch => {
    axios.post(`${apiCard}/users/${userId}/cart`, data, getConfig())
      .then(() => {
        dispatch(getAddProduct(userId))
        Swal.fire({
          icon: "success",
          title: "Producto agregado!",
          text: "El producto a sido agregado al carrito exitosamente",
          timer: 2500,
        })
      })
      .catch((Error) => {
        Swal.fire({
          icon: "error",
          timer: "Error",
          text: "Error al agregar un producto al carrito",
        })
        console.log(Error)
      })
}

export const updateProductFromCart = (userId,data) => dispatch => {
  axios.patch(`${apiCard}/cart/${data.cartId}/product/${data.productId}`, data, getConfig())
  .then(() => {
    dispatch(getAddProduct(userId))
    Swal.fire({
      icon: "success",
      title: "Producto actualizado!",
      text: "El producto se ha actualizado correctamente",
      timer: 2500,
    })
  })
  .catch((Error) => {
    Swal.fire({
      icon: "error",
      timer: "Error",
      text: "Error al actualizar un producto al carrito",
    })
    console.log(Error)
  })
}
export const deleteProductFromCar = (userId, data) => dispatch => {
  axios.delete(`${apiCard}/cart/${data.cartId}/product/${data.productId}`, getConfig())
  .then(() => {
    dispatch(getAddProduct(userId))
    // alert(`el producto se elimino correctamente`)
    Swal.fire({
      icon: "success",
      title: "Producto eliminado!",
      text: "El producto se ha elimino correctamente",
      timer: 1000,
    })
  })
  .catch((Error) => {
    Swal.fire({
      icon: "error",
      timer: "Error",
      text: "Error al eliminar un producto al carrito",
    })
    console.log(Error)
  })
}

export const purchaseProductCart = (userId) => dispatch => {

  axios.post(`${apiCard}/users/${userId}/orders`, getConfig())
  .then((res) => {
    dispatch(getAddProduct(userId))
    Swal.fire({
      icon: "success",
      title: 'Productos comprados!',
      text: "Has comprado los productos correctamente",
      confirmButtonText: 'Ok',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(setShooping())
      } 
    })
  })
  .catch((Error) => {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Error al comprar los productos del carrito",
    })
    console.log(Error)
  })
}

// export const removeAllProducts = () => dispatch => {
//   axios.delete(`${apiCard}/cart/${id}`, getConfig())
//   .then(() => {
//     dispatch(getAddProduct())
//     alert(`el producto se elimino correctamente`)
//   })
//   .catch((Error) => {
//     alert(`error al eliminar un producto al carrito`)
//     console.log(Error)
//   })
// }

export const { setcar } = ProductCarSlice.actions;
export default ProductCarSlice.reducer;


