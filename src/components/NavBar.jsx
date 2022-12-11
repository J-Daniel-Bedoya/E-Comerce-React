import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { setShooping } from "../store/slices/shoopingTrue.slice";
import { getAddProduct } from "../store/slices/ProductCar.slice";
import '../styles/Home/HomeStart.css'
import '../styles/navbar/Navbar.css'
import { useDispatch } from "react-redux";
import { purchasesThunk } from "../store/slices/purchases.slice";

const NavBar = () => {
  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  const logout = () =>{
    localStorage.setItem("token", "")
    localStorage.setItem("User Name", "")
  }
  const userId = localStorage.getItem("userId");
  const shoping = () => {
    if (userId !== null) {
      dispatch(setShooping())
      dispatch(getAddProduct(userId))
    }else{
      alert("Inicia sesion para acceder a todas las caracteristicas", navigate("/login"))
    }
  }
  const purch = () => {
    dispatch(purchasesThunk(userId));
    console.log(userId)
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
        <Link to="/login" onClick={() => logout()}  className="nav__icons LOGOUT">
          <p><i className="fa-solid fa-user nav__icon"></i></p>
        </Link>
        <Link to={"/purchases"} onClick={() => purch()} className="nav__icons purchases">
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
