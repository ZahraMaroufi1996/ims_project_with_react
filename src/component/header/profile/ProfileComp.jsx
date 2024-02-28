import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./ProfileComp.module.css";
import classNames from "classnames";
import { Img1 } from "../../icons/Img1";
import { Img2 } from "../../icons/Img2";
import { UserLogo } from "../../icons/UserLogo";
import { ProfileClose } from "../../icons/ProfileClose";
import { ProfileConfirm } from "../../icons/ProfileConfirm";

// import { Img3 } from "../../icons/Img3";
// import { Img4 } from "../../icons/Img4";
// import { Img5 } from "../../icons/Img5";
// import { Img6 } from "../../icons/Img6";
// import { Img7 } from "../../icons/Img7";
// import { Img8 } from "../../icons/Img8";
// import { Img9 } from "../../icons/Img9";

const ProfileComp = ({ onClose, onConfirm }) => {
  const handleConfirm = (event) => {
    onConfirm?.(event);
  };

  const handleClose = (event) => {
    onClose?.(event);
  };

  return (
    <div className={classNames(classes["profile"])}>
      <div
        className={classNames(classes["profile-triangle"], classes["triangle"])}
      ></div>
      <div
        className={classNames(
          classes["profile-content"],
          "d-flex ",
          "flex-column",
          "justify-content-around"
        )}
      >
        <div
          className={classNames(
            classes["profile-description"],
            "d-flex ",
            "flex-column"
          )}
        >
          <p className={classNames(classes["default-user"])}>
            <UserLogo />
            <span className={classNames(classes["default-user-text"])}>
              Saleh Zekavati
            </span>
          </p>
          <p className={classNames(classes["user-label"])}>Username</p>
          <p className={classNames(classes["profile-text"])}>
            Made 2020.05.12 at 12:02:35
          </p>
          <p className={classNames(classes["profile-text"])}>
            Last login 2021.11.12 at 08:02:56
          </p>
        </div>
        <div className={classNames(classes["profile-content-images"])}>
          <Img2 />
          <Img2 />
          <Img2 />
          <Img2 />
          <Img2 />
          <Img2 />
          <Img2 />
          <Img2 />
          <Img2 />
        </div>
        <div
          className={classNames(
            classes["profile-footer"],
            "d-flex",
            "justify-content-between"
          )}
        >
          <div onClick={handleClose}>
            <ProfileClose />
          </div>
          <div onClick={handleConfirm}>
            <ProfileConfirm />
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProfileComp };
