import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../styles/Login/Logins/SignUp.css';

const SignUp = () => {
  const [isVisible, setIsVisible] = useState(true)

  
  return (
    <div className='signUp'>
      <div className='signUp__card'>
        <div className='signUp__card--imgCircle'>
          <div className='signUp__card--container-logo'>
            <div className='signUp__card--img'></div>
            <h5>Sign Up</h5>
          </div>
        </div>
        <form action="" className='signUp__card--form'>
          <div className='signUp__card--input'>
            <label htmlFor="text"><i className="fa-solid fa-user"></i></label>
            <input id='text' type="text" placeholder="First Name" />
          </div>
          <div className='signUp__card--input'>
            <label htmlFor="text"><i className="fa-solid fa-user"></i></label>
            <input id='text' type="text" placeholder="Last Name" />
          </div>
          <div className='signUp__card--input'>
            <label htmlFor="number"><i className="fa-solid fa-phone"></i></label>
            <input id='number' type="number" placeholder="Phone" />
          </div>
          <div className='signUp__card--input'>
            <label htmlFor="email"><i className="fa-solid fa-envelope"></i></label>
            <input id='email' type="email" placeholder="Email" />
          </div>
          <div className='signUp__card--input'>
            {/* <i class="fa-solid fa-lock-open"></i> */}
            <label htmlFor="password"><i className="fa-solid fa-lock"></i></label>
            <input id='password' type={isVisible ? "password" : "text"} placeholder="Password" />
            <div onClick={() => setIsVisible(!isVisible)} className="isVisible">
              {
                isVisible ? <i className="fa-regular fa-eye-slash"></i> : <i className="fa-regular fa-eye"></i>
              }
            </div>
          </div>
          <div className='signUp__card--input signUp__card--inputBtn'>
            <button>Sign Up</button>
          </div>
        </form>
        <p className='signUp__cart--footerForm'>Do you already have an account? <Link className='Link' to={"/login/LoginUp"}>Login Up</Link></p>
      </div>

    </div>
  );
};

export default SignUp;