import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Login/LoginUser.css'

const LoginUser = () => {

  return (
    <div className='login'>
      <div className='login_newUser'>
        <div className='login__container--logo'>
            <h3>Iniciar seción</h3>
          <div className='loginIn__card--colorFont'>
            <Link className='login__logo' to={"/login/LoginUp"}>
              <div className='login__img'></div>
              <p>MyShop</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;