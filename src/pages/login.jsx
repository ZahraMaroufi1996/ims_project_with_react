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
  const url = "https://c6059f0c-d4f4-45f8-9187-a1d3da3b8645.mock.pstmn.io";
  let my_token;

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
    // loginAPI(form)
    Axios.post(`${url}/api/login?Content-Type=application/json`, form)
      .then((response) => {
        my_token = response.data.token;
        localStorage.setItem("token", my_token);
        console.log(my_token);
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
            <div className="username-container d-flex flex-row justify-content-around">
              <input
                className="username-btn"
                type="text"
                name="username"
                placeholder="نام کاربری"
                onChange={handleChange}
              />
              <UserIcon />
            </div>
            <div className="password-container">
              <input
                class="password-btn"
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
