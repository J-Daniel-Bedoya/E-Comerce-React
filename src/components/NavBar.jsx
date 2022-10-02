import React from "react";
import '../styles/navbar/Navbar.css'
import '../styles/Home/HomeStart.css'
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <div className="Navbar" >
      <Link to="/" className="nav__icons--logo"></Link>
      <div className="nav__icons--liksPages">
        <Link to="/login" className="nav__icons user">
            <i className="fa-solid fa-user"></i>
        </Link>
        <Link to={"/purchases"} className="nav__icons purchases">
            <i className="fa-solid fa-bag-shopping"></i>
        </Link>
        <div className="nav__icons store">
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
