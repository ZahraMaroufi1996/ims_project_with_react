import classes from "./LogOutComp.module.css";
import classNames from "classnames";

const LogOutComp = ({ onClose, onConfirm }) => {
  // const url = "https://ba09580e-e7a2-4d8f-ac33-1e59e5594f17.mock.pstmn.io";
  const handleConfirm = (event) => {
    onConfirm?.(event);
  };

  const handleClose = (event) => {
    onClose?.(event);
  };

  return (
    <div className={classNames(classes["log-out"])}>
      <div className={classNames(classes["triangle"])}></div>
      <div
        className={classNames(
          classes["log-out-content"],
          "d-flex",
          "flex-column",
          "align-items-center",
          "justify-content-around"
        )}
      >
        <p className={classNames(classes["log-out-title"])}>loging out</p>
        <p className={classNames(classes["log-out-question"])}>
          Are You sure about loging out?
        </p>
        <div
          className={classNames(
            classes["toolbar-buttons"],
            "d-flex",
            "justify-content-between"
          )}
        >
          <button
            className={classNames(
              classes["toolbar-button"],
              classes["log-out-cancel-button"]
            )}
            onClick={handleClose}
          >
            CANCEL
          </button>
          <button
            className={classNames(
              classes["toolbar-button"],
              classes["log-out-confirm-button"]
            )}
            onClick={handleConfirm}
          >
            YES
          </button>
        </div>
      </div>
    </div>
  );
};

export { LogOutComp };
