import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import "./login.css";
import { LoginLogo } from "../component/login/LoginLogo";
import { Avatar } from "../component/login/Avatar";
import { UserIcon } from "../component/login/UserIcon.jsx";
import { PassIcon } from "../component/login/PassIcon";

const Login = () => {
  const url = "https://cdfb4ab4-65e8-498e-890c-570e0ade6a15.mock.pstmn.io";
  // let token;

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const history = useNavigate();
  // const [error, setError] = useState(undefined);
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post(`${url}/api/login?Content-Type=application/json`, form)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        console.log(token);
        history("/dashboard/topology");
      })
      .catch((error) => {});
  };

  return (
    <div className="Login-body">
      <div className="login-content d-flex flex-column">
        <div className="Login-container d-flex flex-column justify-content-between">
          <div className="Login-Avatar">
            <Avatar />
          </div>
          <form
            className="Login-form d-flex flex-column justify-content-between"
            id="login-form"
            onSubmit={handleSubmit}
          >
            <div className="username-container d-flex justify-content-around">
              <input
                className="username-input"
                type="text"
                name="username"
                placeholder="نام کاربری"
                onChange={handleChange}
              />
              <UserIcon />
            </div>
            <div className="password-container d-flex justify-content-around">
              <input
                class="password-input"
                type="password"
                name="password"
                placeholder="رمز عبور"
                onChange={handleChange}
              />
              <PassIcon />
            </div>
            <div className="submit-container">
              <button type="submit" class="submit-button">
                وارد شوید
              </button>
            </div>
          </form>
          <div className="Login-Language">
            <label className="switch">
              <input type="checkbox" name="language" id="language" />
              <span className="slider round"> EN </span>
            </label>
          </div>
        </div>
        <LoginLogo />
        <p className="Login-Logo-text">Sina NMS Client Version 2.7.4</p>
      </div>
    </div>
  );
};

export default Login;
