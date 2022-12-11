import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login/Logins/LoginUp.css";

const LoginUp = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { register, handleSubmit } = useForm();
  const Navigate = useNavigate();

  // funcion que inicia sesion el cuenta
  const submit = (data) => {
    axios
      .post(
        `https://api-e-commerce-production.up.railway.app/api/v1/auth/login`,
        data
      )
      .then((res) => {
        console.log(res.data);
        alert("usuarioLogeado");
        localStorage.setItem("token", res.data.token);
        localStorage.setItem(
          "userId",
          res.data.user.id
        );
        Navigate("/");
      })
      .catch((error) => {
        if (error.response?.status === 404) alert("credenciales invalidas");
        console.log(error.response);
      });
  };
  return (
    <div className="loginUp">
      <div>
        <h3>
          Use these credentials
          <br />
          to access immediately
        </h3>
        <br />
        <b style={{ fontSize: "14px" }}>Email:</b>
        <p style={{ fontSize: "13px", fontWeight: "600", color: "#5112e4" }}>
          usuariopordefecto58@gmail.com
        </p>
        <b style={{ fontSize: "14px" }}>Password:</b>
        <p style={{ fontSize: "13px", fontWeight: "600", color: "#5112e4" }}>
          PORdefecto
        </p>
      </div>
      <div className="loginUp__card">
        <div className="loginUp__card--imgCircle">
          <div className="loginUp__card--container-logo">
            <div className="loginUp__card--img"></div>
            <h5>Login Up</h5>
          </div>
        </div>
        <form onSubmit={handleSubmit(submit)} className="loginUp__card--form">
          <div className="loginUp__card--input">
            <label htmlFor="email">
              <i className="fa-solid fa-envelope"></i> Email{" "}
            </label>
            <input id="email" type="email" {...register("email")} />
          </div>
          <div className="loginUp__card--input">
            <label htmlFor="password">
              <i className="fa-solid fa-lock"></i> Password{" "}
            </label>
            <input
              id="password"
              type={isVisible ? "password" : "text"}
              {...register("password")}
            />
            <div onClick={() => setIsVisible(!isVisible)} className="isVisible">
              {isVisible ? (
                <i className="fa-regular fa-eye-slash"></i>
              ) : (
                <i className="fa-regular fa-eye"></i>
              )}
            </div>
          </div>
          <div className="loginUp__card--input loginIn__card--inputBtn">
            <button>Login Up</button>
          </div>
        </form>
        <p className="loginUp__cart--footerForm">
          Don't have account?{" "}
          <Link className="loginUp__link" to={"/login/createAccount"}>
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginUp;
