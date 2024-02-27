import React, { useState, useEffect } from "react";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classes from "./Footer.module.css";
import classNames from "classnames";

const Footer = () => {
  const url = "https://ba09580e-e7a2-4d8f-ac33-1e59e5594f17.mock.pstmn.io";
  const [time, setTime] = useState({
    hour: 9,
    min: 0,
    sec: 0,
  });

  // useEffect(() => {
  //   const fetchTime = () => {
  //     const token = localStorage.getItem("token");
  //     Axios.get(`${url}/api/general`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //       .then((response) => {
  //         if (response.status == 200) {
  //           setTime((prevTime) => ({
  //             ...prevTime,
  //             hour: response.data.timeHour,
  //             min: response.data.timeMin,
  //             sec: response.data.timeSec,
  //           }));
  //         }
  //       })
  //       .catch((error) => {
  //         toast(error.message);
  //       });
  //   };

  //   // Fetch time immediately and then every 15 minutes
  //   fetchTime();
  //   const intervalId = setInterval(fetchTime, 15 * 60 * 1000);
  // }, []);

  return (
    <div className={classNames(classes["footer"])}>
      <div className={classNames(classes["time-box"])}>
        <div className={classNames(classes["time-content"])}>
          <span>Server Time</span>
          <span id="local-time">
            {`${time.hour + 3}:${time.min + 30}:${time.sec}`}
          </span>
          <span id="global-time">{`${time.hour}:${time.min}:${time.sec}`}</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
