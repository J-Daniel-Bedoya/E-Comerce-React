import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../styles/Login/Logins/LoginUp.css';

const LoginUp = () => {
  const [isVisible, setIsVisible] = useState(true)


  return (
    <div className='loginUp'>
      <div className='loginUp__card'>
        <div className='loginUp__card--imgCircle'>
          <div className='loginUp__card--container-logo'>
            <div className='loginUp__card--img'></div>
            <h5>Login In</h5>
          </div>
        </div>
        <form action="" className='loginUp__card--form'>
          <div className='loginUp__card--input'>
            <label htmlFor="email"><i className="fa-solid fa-envelope"></i></label>
            <input id='email' placeholder="example@gmail.com" type="email" />
          </div>
          <div className='loginUp__card--input'>
            <label htmlFor="password"><i className="fa-solid fa-lock"></i></label>
            <input id='password'placeholder="***********"  type={isVisible ? "password" : "text"}/>
            <div onClick={() => setIsVisible(!isVisible)} className="isVisible">
              {
                isVisible ? <i className="fa-regular fa-eye-slash"></i> : <i className="fa-regular fa-eye"></i>
              }
            </div>
          </div>
          <div className='loginUp__card--input loginIn__card--inputBtn'>
            <button>Login Up</button>
          </div>
        </form>
        <p className='loginUp__cart--footerForm'>Don't have account? <Link className='Link' to={"/login/SignUp"}>Sign Up</Link></p>
      </div>
    </div>
  );
};

export default LoginUp;