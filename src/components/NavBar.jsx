import React from "react";
import '../styles/navbar/Navbar.css'
import '../styles/Home/HomeStart.css'
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <div className="Navbar" >
      <Link to="/" className="nav__icons--logo">
        <div className=""></div>
      </Link>
      <Link to="/login" className="nav__icons user">
        <div className="">
          <i className="fa-solid fa-user"></i>
        </div>
      </Link>
      <Link to={"/purchases"} className="nav__icons purchases">
        <div className="">
          <i className="fa-solid fa-bag-shopping"></i>
        </div>
      </Link>
      <div className="nav__icons store">
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
    </div>
  );
};

export default NavBar;
