import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setShooping } from "../store/slices/shoopingTrue.slice";
import { useDispatch } from "react-redux";
import '../styles/Home/HomeStart.css'
import '../styles/navbar/Navbar.css'

const NavBar = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  // funcion que elimina el token o que cierra sesion de la cuenta
  const logout = () =>{
    localStorage.setItem("token", "")
  }



  return (
    <div className="Navbar" >
      <Link to="/" className="nav__icons--logo">
        <div className='navbar__card--imgCircle'>
          <div className='navbar__card--container-logo'>
            <div className='navbar__card--img'></div>
            <h5>E-comerce</h5>
          </div>
        </div>
      </Link>
      <div className="nav__icons--liksPages">
        <Link to="/login" className="nav__icons user">
            <i className="fa-solid fa-user nav__icon"></i>
        </Link>
        <Link to={"/purchases"} className="nav__icons purchases">
            <i className="fa-solid fa-bag-shopping nav__icon"></i>
        </Link>
        <Link to="/login" onClick={() => logout()}  className="nav__icons LOGOUT">
            <p>LOGOUT</p>
        </Link>
        <div className="nav__icons store" onClick={() => dispatch(setShooping())}>
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
      </div>

    </div>
  );
};

export default NavBar;
