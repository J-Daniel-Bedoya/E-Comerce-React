import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../styles/Login/Logins/LoginIn.css';

const LoginIn = () => {
  const [isVisible, setIsVisible] = useState(true)

  
  return (
    <div className='loginIn'>
      <div className='loginIn__card'>
        <div className='loginIn__card--imgCircle'>
          <div className='loginIn__card--container-logo'>
            <div className='loginIn__card--img'></div>
            <h5>Login In</h5>
          </div>
        </div>
        <form action="" className='loginIn__card--form'>
          <div className='loginIn__card--input'>
            <label htmlFor="text"><i className="fa-solid fa-user"></i></label>
            <input id='text' type="text" />
          </div>
          <div className='loginIn__card--input'>
            <label htmlFor="number"><i className="fa-solid fa-phone"></i></label>
            <input id='number' type="number" />
          </div>
          <div className='loginIn__card--input'>
            <label htmlFor="email"><i className="fa-solid fa-envelope"></i></label>
            <input id='email' type="email" />
          </div>
          <div className='loginIn__card--input'>
            {/* <i class="fa-solid fa-lock-open"></i> */}
            <label htmlFor="password"><i className="fa-solid fa-lock"></i></label>
            <input id='password' type={isVisible ? "password" : "text"}/>
            <div onClick={() => setIsVisible(!isVisible)} className="isVisible">
              {
                isVisible ? <i className="fa-regular fa-eye-slash"></i> : <i className="fa-regular fa-eye"></i>
              }
            </div>
          </div>
          <div className='loginIn__card--input loginIn__card--inputBtn'>
            <button>Register</button>
          </div>
        </form>
        <p className='loginIn__cart--footerForm'>Ya tienes cuenta? <Link className='Link' to={"/login/ExistingUser"}>Login Up</Link></p>
      </div>

    </div>
  );
};

export default LoginIn;