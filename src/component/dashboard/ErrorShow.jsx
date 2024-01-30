import React, { forwardRef } from "react";
import classes from "./ErrorShow.module.css";
import classNames from "classnames";
import { Error } from "../icons/Error";
import { Success } from "../icons/Success";

const ErrorShow = ({ errorMessage = "Hiiiiii" }) => {
  return (
    <div className={classNames(classes["show-error"])}>
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
        <span className={classNames(classes["error-close-icon"])}>&times;</span>

        <div
          id="error-content"
          className={classNames(
            classes["error-content"],
            "d-flex",
            "justify-content-start",
            "align-items-center"
          )}
        >
          {/* <img
            src="images/success Icon.svg"
            className={classNames(classes["error-icon"])}
          /> */}
          {errorMessage ? (
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
              <Success />{" "}
              <p
                id="error-message"
                className={classNames(classes["error-message"])}
              >
                Your request was done successfully!
              </p>
            </>
          )}
          {/* <Error />
          <Success />
          <p
            id="error-message"
            className={classNames(classes["error-message"])}
          >
            successfull message!
          </p> */}
        </div>
      </div>
    </div>
  );
};

export { ErrorShow };
