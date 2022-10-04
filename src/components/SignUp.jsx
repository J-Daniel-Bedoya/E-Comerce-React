import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login/Logins/SignUp.css';

const SignUp = () => {
  const [isVisible, setIsVisible] = useState(true)
  const { register, handleSubmit, reset } = useForm();
  const Navigate = useNavigate()

  const submit = (data) => {
    //console.log(data);
    axios.post(`https://ecommerce-api-react.herokuapp.com/api/v1/users`, data)
      .then(res => {
        alert("usuario registado")
        console.log(res?.data?.data)
        clear()
        Navigate("/")
      })
      .catch(error => {
        alert("error al crear el usuario!")
        console.log(error?.data?.data)
      })
  }

  // esta funcion me borra lo elementos del input
  const clear = () =>{
    reset({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: ""  
    })
  }

  return (
    <div className='signUp'>
      <div className='signUp__card'>
        <div className='signUp__card--imgCircle'>
          <div className='signUp__card--container-logo'>
            <div className='signUp__card--img'></div>
            <h5>Sign Up</h5>
          </div>
        </div>
        <form onSubmit={handleSubmit(submit)} className='signUp__card--form'>
          <div className='signUp__card--input'>
            <label htmlFor="FirstName"><i className="fa-solid fa-user"></i></label>
            <input id='FirstName' type="text" placeholder="First Name" {...register("firstName")} />
          </div>
          <div className='signUp__card--input'>
            <label htmlFor="LastName"><i className="fa-solid fa-user"></i></label>
            <input id='LastName' type="text" placeholder="Last Name" {...register("lastName")}/>
          </div>
          <div className='signUp__card--input'>
            <label htmlFor="Phone"><i className="fa-solid fa-phone"></i></label>
            <input id='Phone' type="number" placeholder="Phone" {...register("phone")}/>
          </div>
          <div className='signUp__card--input'>
            <label htmlFor="email"><i className="fa-solid fa-envelope"></i></label>
            <input id='email' type="email" placeholder="Email" {...register("email")}/>
          </div>
          <div className='signUp__card--input'>
            {/* <i class="fa-solid fa-lock-open"></i> */}
            <label htmlFor="password"><i className="fa-solid fa-lock"></i></label>
            <input id='password' type={isVisible ? "password" : "text"} placeholder="Password" {...register("password")}/>
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