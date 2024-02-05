import React, { useRef } from "react";
import ReactDOM from "react-dom";
import classes from "./ErrorShow.module.css";
import classNames from "classnames";
import { Error } from "../icons/Error";
import { Success } from "../icons/Success";

const ErrorShow = ({ errorMessage, onClose }) => {
  const errorBox = useRef(null);
  const style = { display: "block" };

  function hanleOnClick() {
    // console.log(errorBox.current);
    // errorBox.current.style.display = "none";
    onClose();
  }

  return (
    <>
      {ReactDOM.createPortal(
        <div
          style={style}
          className={
            errorMessage !== "success"
              ? classNames(classes["show-error"], classes["error-color"])
              : classNames(classes["show-error"], classes["success-color"])
          }
          ref={errorBox}
        >
          <div
            className={classNames(
              "h-100",
              "w-100",
              "d-flex",
              "flex-column",
              "justify-content-start",
              "align-items-center"
            )}
          >
            <span
              className={classNames(classes["error-close-icon"])}
              onClick={hanleOnClick}
            >
              &times;
            </span>

            <div
              id="error-content"
              className={classNames(
                classes["error-content"],
                "d-flex",
                "justify-content-start",
                "align-items-center"
              )}
            >
              {errorMessage !== "success" ? (
                <>
                  <Error />
                  <p
                    id="error-message"
                    className={classNames(classes["error-message"])}
                  >
                    {errorMessage}
                  </p>
                </>
              ) : (
                <>
                  <Success />
                  <p
                    id="error-message"
                    className={classNames(classes["error-message"])}
                  >
                    Your request was done successfully!
                  </p>
                </>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export { ErrorShow };
