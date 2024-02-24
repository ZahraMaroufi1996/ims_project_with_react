import { useEffect, useState } from "react";
import React from "react";
import classes from "./Modal.module.css";
import classNames from "classnames";

const Modal = ({ node, onClose, onConfirm }) => {
  const handleConfirm = (event) => {
    onConfirm?.(event);
  };

  const handleClose = (event) => {
    onClose?.(event);
  };

  return (
    <div className={classNames(classes["modal"])}>
      <div
        className={classNames(
          "h-100",
          "w-100",
          "d-flex",
          "align-items-center",
          "justify-content-center"
        )}
      >
        <div
          className={classNames(
            classes["modal-content"],
            "d-flex",
            "flex-column",
            "align-items-center",
            "justify-content-between"
          )}
        >
          <p className={classNames(classes["modal-close"])}>&times;</p>

          <p className={classNames(classes["modal-title"])}>Confirm Delete</p>

          <p className={classNames(classes["modal-question"])}>
            Do you want to remove the selected Item?
          </p>
          <div
            className={classNames(
              classes["modal-buttons"],
              "d-flex",
              "align-items-center",
              "justify-content-between"
            )}
          >
            <button
              id="modal-delete-button"
              className={classNames(classes["modal-button"])}
              onClick={handleConfirm}
            >
              Delete
            </button>
            <button
              id="modal-cancel-button"
              className={classNames(classes["modal-button"])}
              onClick={handleClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Modal };
