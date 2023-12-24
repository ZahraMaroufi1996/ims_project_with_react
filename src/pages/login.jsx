import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import "./login.css";

const Login = () => {
  const url = "https://88d188a7-0705-4aa4-b0f9-0d2781378c89.mock.pstmn.io";
  let my_token;

  const [form, setForm] = useState({
    username: "",
    password: "",
  });
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
        console.log(response.data);
        my_token = response.data.token;
        console.log(my_token);
        localStorage.setItem("token", my_token);
        // $("head").append(
        //   `<meta http-equiv="refresh" content="0; URL=After_Login_Page.html" />`
        // );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div class="Login-container">
      <div class="Login-Avatar">
        <img src="../../images/login_images/Avatar.svg" class="Avatar-image" />
      </div>
      <form class="Login-form" id="login-form" onSubmit={handleSubmit}>
        <div class="username-container">
          <input
            class="username-btn"
            type="text"
            name="username"
            placeholder="نام کاربری"
            onChange={handleChange}
          />
          <img
            src="../../images/login_images/Group 8492.svg"
            class="username-icon"
          />
        </div>

        <div class="password-container">
          <input
            class="password-btn"
            type="password"
            name="password"
            placeholder="رمز عبور"
            onChange={handleChange}
          />
          <img
            src="../../images/login_images/Group 8493.svg"
            class="password-icon"
          />
        </div>
        <div class="submit-container">
          <button type="submit" class="submit-button">
            وارد شوید
          </button>
        </div>
        <div class="Login-Language">
          <label class="switch">
            <input type="checkbox" name="language" id="language" />
            <span class="slider round"> EN </span>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Login;
