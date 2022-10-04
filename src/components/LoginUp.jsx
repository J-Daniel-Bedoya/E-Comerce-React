import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import '../styles/Login/Logins/LoginUp.css';

const LoginUp = () => {
  const [isVisible, setIsVisible] = useState(true)
  const { register, handleSubmit } = useForm();
  const submit = (data) =>{
    alert("entrando")
  }
  return (
    <div className='loginUp'>
      <div className='loginUp__card'>
        <div className='loginUp__card--imgCircle'>
          <div className='loginUp__card--container-logo'>
            <div className='loginUp__card--img'></div>
            <h5>Login In</h5>
          </div>
        </div>
        <form onSubmit={handleSubmit(submit)} action="" className='loginUp__card--form'>
          <div className='loginUp__card--input'>
            <label htmlFor="email"><i className="fa-solid fa-envelope"></i></label>
            <input id='email' type="email" />
          </div>
          <div className='loginUp__card--input'>
            <label htmlFor="password"><i className="fa-solid fa-lock"></i></label>
            <input id='password' type={isVisible ? "password" : "text"}  {...register("password")} />
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