import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login/Logins/createAccount.css';

const CreateAccount = () => {
  const [isVisible, setIsVisible] = useState(true)
  const { register, handleSubmit, reset } = useForm();
  const Navigate = useNavigate()
  const apiEcommerce = "https://api-e-commerce-production.up.railway.app/api/v1/";

  const submit = (data) => {
    axios.post(`${apiEcommerce}/users`, data)
      .then(res => {
        alert("usuario registado")
        clear()
        Navigate("/login")
      })
      .catch(error => {
        alert("error al crear el usuario!")
      })
  }

  // esta funcion me borra lo elementos del input
  const clear = () =>{
    reset({
      username: "",
      email: "",
      password: ""  
    })
  }

  return (
    <div className='createAccount'>
      <div className='createAccount__card'>
        <div className='createAccount__card--imgCircle'>
          <div className='createAccount__card--container-logo'>
            <div className='createAccount__card--img'></div>
            <h5>MyShop</h5>
          </div>
        </div>
        <form onSubmit={handleSubmit(submit)} className='createAccount__card--form'>
          <div className='createAccount__card--input'>
            <label htmlFor="LastName"><i className="fa-solid fa-user"></i></label>
            <input id='LastName' type="text" placeholder="Name" {...register("username")}/>
          </div>
          <div className='createAccount__card--input'>
            <label htmlFor="email"><i className="fa-solid fa-envelope"></i></label>
            <input id='email' type="email" placeholder="Email" {...register("email")}/>
          </div>
          <div className='createAccount__card--input'>
            {/* <i class="fa-solid fa-lock-open"></i> */}
            <label htmlFor="password"><i className="fa-solid fa-lock"></i></label>
            <input id='password' type={isVisible ? "password" : "text"} placeholder="Password" {...register("password")}/>
            <div onClick={() => setIsVisible(!isVisible)} className="isVisible">
              {
                isVisible ? <i className="fa-regular fa-eye-slash"></i> : <i className="fa-regular fa-eye"></i>
              }
            </div>
          </div>
          <div className='createAccount__card--input createAccount__card--inputBtn'>
            <button>Create Account</button>
          </div>
        </form>
        <p className='createAccount__cart--footerForm'>Do you already have an account? <Link className='createAccount__link' to={"/login/LoginUp"}>Login Up</Link></p>
      </div>

    </div>
  );
};

export default CreateAccount;