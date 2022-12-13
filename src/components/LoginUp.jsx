import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { setIsLogout } from "../store/slices/isLogout.slice";
import "../styles/Login/Logins/LoginUp.css";

const LoginUp = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { register, handleSubmit } = useForm();
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  // funcion que inicia sesion el cuenta
  const submit = (data) => {
    axios
      .post(
        `https://api-e-commerce-production.up.railway.app/api/v1/auth/login`,
        data
      )
      .then((res) => {
        localStorage.setItem("userId", res.data.user.id);
        localStorage.setItem("token", res.data.token);
        Swal.fire({
          icon: "success",
          title: "Inicio de sesion exitoso",
          text: "Haz iniciado sesion correctamente, ¡esperamos que disfrutes la página!",
          confirmButtonText: "Ok",
        }).then((res) => {
          if (res.isConfirmed) {
            dispatch(setIsLogout(false));
            Navigate("/");
          }
        })
      })
      .catch((error) => {
        if (error.response?.status === 400) {
          Swal.fire({
            icon: "error",
            title: "Información invalida",
            text: "¡Intenta de nuevo!. Siempre puedes provar con el email de prueba",
          })
        };
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
            <h5>MyShop</h5>
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
