import ReactDOM from "react-dom";
import React from "react";
const toast = {
  success: () => {
    const body = document.body;
    console.log(body);
    return ReactDOM.createPortal(
      <div
        style={{
          width: 100,
          height: 100,
          border: "1px solid red",
          position: "fixed",
          bottom: 20,
          left: 30,
          backgroundColor: "red",
        }}
      >
        error message
      </div>,
      body
    );
  },
};

export { toast };
