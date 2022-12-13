import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { setShooping } from "../store/slices/shoopingTrue.slice";
import { getAddProduct } from "../store/slices/ProductCar.slice";
import '../styles/Home/HomeStart.css'
import '../styles/navbar/Navbar.css'
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { setIsLogout } from "../store/slices/isLogout.slice";
import { getProductsThunk } from "../store/slices/products.slice";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogout = useSelector(state => state.isLogout);
  // const [isLogut, setIsLogout] = useState(true);
  const logout = () =>{
    Swal.fire({
      icon: "question",
      title: "Logout",
      text: "¿Deseas salir de la página?",
      confirmButtonText: "Yes",
      showCancelButton: true,
      cancelButtonText: "No",
    }).then(res => {
      if (res.isConfirmed) {
        localStorage.setItem("token", "null")
        localStorage.setItem("userId", "null")
        dispatch(setIsLogout(true))
        dispatch(getProductsThunk())
        navigate("/")
        Swal.fire({
          icon: "info",
          title: "Logout exitoso",
          text: "Haz salido de la página correctamente",
          timer: 3000
        })
      }
    })
  }


  const userId = localStorage.getItem("userId");
  const shoping = () => {
    if (userId !== null && userId !== "null") {
      dispatch(setShooping())
      dispatch(getAddProduct(userId))
    }else{
      Swal.fire({
        icon: "warning",
        title: "¡Registrate!",
        text: "Para poder realizar esta acción necesitas estar registrado en el sitio.",
        showDenyButton: true,
        denyButtonText: "No gracias!",
        confirmButtonText: "Ok",
      }).then(res => {
        if(res.isConfirmed) {
          navigate("/login");
        }else{
          Swal.fire({
            icon: "info",
            title: "Registro denegado",
            text: "¡No te preocupes!, podras registrarte cuando quieras",
          })
        }
      })
    }
  }
 
  
  return (
    <div className="Navbar" >
      <Link to="/" className="nav__icons--logo">
        <div className='navbar__card--imgCircle'>
          <div className='navbar__card--container-logo'>
            <div className='navbar__card--img'></div>
            <h5>MyShop</h5>
          </div>
        </div>
      </Link>
      <div className="nav__icons--liksPages">
        {
          isLogout ? (
            <Link to="/login" className="nav__icons LOGOUT">
              <p><i className="fa-solid fa-user nav__icon"></i></p>
            </Link>
          ) : (
            <Link to="#" onClick={() => logout()} className="nav__icons LOGOUT">
              <p><i class="fa-solid fa-right-from-bracket nav__icon"></i></p>
            </Link>
          )

        }
        <Link to={"/purchases"} className="nav__icons purchases">
            <i className="fa-solid fa-bag-shopping nav__icon"></i>
        </Link>
        <div className="nav__icons store" onClick={() => shoping()}>
          <i className="fa-solid fa-cart-shopping nav__icon"></i>
        </div>
      </div> 

    </div>
  );
};

export default NavBar;
