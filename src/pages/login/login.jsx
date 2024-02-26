import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import classes from "./login.module.css";
import classNames from "classnames";
import { LoginLogo } from "../../component/login/LoginLogo.jsx";
import { Avatar } from "../../component/login/Avatar.jsx";
import { UserIcon } from "../../component/login/UserIcon.jsx";
import { PassIcon } from "../../component/login/PassIcon.jsx";
import { UserInverseIcon } from "../../component/login/UserInverseIcon.jsx";
import { PassInverseIcon } from "../../component/login/PassInverseIcon.jsx";

const Login = () => {
  const url = "https://ba09580e-e7a2-4d8f-ac33-1e59e5594f17.mock.pstmn.io";
  const [language, setLanguage] = useState(true);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const history = useNavigate();
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
    <div className={classNames(classes["login-body"])}>
      <div
        className={classNames(
          classes["login-content"],
          "d-flex",
          "flex-column"
        )}
      >
        <div
          className={classNames(
            classes["login-container"],
            "d-flex",
            "flex-column",
            "justify-content-between"
          )}
        >
          <div className={classNames(classes["login-avatar"])}>
            <Avatar />
          </div>
          <form
            className={classNames(
              classes["login-form"],
              "d-flex",
              "flex-column",
              "justify-content-between"
            )}
            id="login-form"
            onSubmit={handleSubmit}
          >
            <div
              className={classNames(
                classes["username-container"],
                "d-flex",
                "justify-content-around"
              )}
            >
              {language ? (
                <>
                  <input
                    className={classNames(classes["username-input-persian"])}
                    type="text"
                    name="username"
                    placeholder="نام کاربری"
                    onChange={handleChange}
                  />
                  <UserIcon />
                </>
              ) : (
                <>
                  <UserInverseIcon />
                  <input
                    className={classNames(classes["username-input-english"])}
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={handleChange}
                  />
                </>
              )}
            </div>
            <div
              className={classNames(
                classes["password-container"],
                "d-flex",
                "justify-content-around"
              )}
            >
              {language ? (
                <>
                  <input
                    className={classNames(classes["password-input-persian"])}
                    type="password"
                    name="password"
                    placeholder="رمز عبور"
                    onChange={handleChange}
                  />
                  <PassIcon />
                </>
              ) : (
                <>
                  <PassInverseIcon />
                  <input
                    className={classNames(classes["password-input-english"])}
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </>
              )}
            </div>
            <div className={classNames(classes["submit-container"])}>
              <button
                type="submit"
                className={classNames(classes["submit-button"])}
              >
                {language ? "وارد شوید" : "Login"}
              </button>
            </div>
          </form>
          <div className={classNames(classes["login-language"])}>
            <label className={classNames(classes["switch"])}>
              <input
                type="checkbox"
                name="language"
                id="language"
                onClick={() => {
                  setLanguage((oldState) => !oldState);
                }}
              />
              <span className={classNames(classes["slider"], classes["round"])}>
                EN
              </span>
            </label>
          </div>
        </div>
        <LoginLogo />
        <p className={classNames(classes["login-logo-text"])}>
          Sina NMS Client Version 2.7.4
        </p>
      </div>
    </div>
  );
};

export default Login;
