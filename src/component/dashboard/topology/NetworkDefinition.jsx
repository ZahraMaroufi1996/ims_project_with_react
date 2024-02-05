import React, { useState, useEffect, useContext } from "react";
import { ErrorContext } from "../../../context/ErrorContext";
// import { TopologyDataContext } from "../../../context/TopologyDataContext";
import Axios from "axios";
import classes from "./NetworkDefinition.module.css";
import { IpInput } from "./ipInput";
import { MyButton } from "../cofiguration/MyButton";
import classNames from "classnames";
// import { toast } from "../../toast/index";
import ReactDOM from "react-dom";
import { ErrorShow } from "../ErrorShow";

const NetworkDefinition = () => {
  const [isShow, setShow] = useState(null);
  const { error, toggleError } = useContext(ErrorContext);
  const [subnet, setSubnet] = useState();
  const [gateway, setGateWay] = useState();
  const url = "https://cdfb4ab4-65e8-498e-890c-570e0ade6a15.mock.pstmn.io";

  const handleSubmit = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");

    const formData = {
      SubnetMask: subnet,
      Gateway: gateway,
    };

    Axios.post(`${url}/api/topology/networkDefinition`, formData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status == 200) setShow("success");
      })
      .catch((error) => {
        setShow("sdfsdf");
        // toggleError(error.message);
      });
  };

  const handleOnChangeSubnet = (value) => {
    setSubnet(value);
  };
  const handleOnChangeGateWay = (value) => {
    setGateWay(value);
  };

  // const callToast = () => {
  //   console.log("Sdfsdf");
  //   const x = document.getElementById("root");
  //   console.log(x);
  //   ReactDOM.createPortal(
  //     <div
  //       style={{
  //         width: 100,
  //         height: 100,
  //         border: "1px solid red",
  //         bottom: 20,
  //         left: 30,
  //         backgroundColor: "red",
  //         position: "absolute",
  //       }}
  //     >
  //       error message
  //     </div>,
  //     x
  //   );
  // };

  return (
    <>
      <div class={classes["network"]}>
        <form
          id="network-definition-form"
          className={classNames(
            classes["network-definition-form"],
            "d-flex",
            "flex-row ",
            "align-items-center"
          )}
          onSubmit={handleSubmit}
        >
          <div
            className={classNames(
              classes["network-definition"],
              "d-flex",
              "flex-row",
              "justify-content-between",
              "align-items-center"
            )}
          >
            <span className={classes["title-span"]}>Network Definition</span>
            <IpInput
              title={"subnetmask"}
              onChange={handleOnChangeSubnet}
              className={classes["network-definition-subnetmask"]}
            />
            <IpInput
              title={"gateway"}
              onChange={handleOnChangeGateWay}
              className={classes["network-definition-gateway"]}
            />
          </div>
          <MyButton
            title={"Set"}
            className={classes["network-definition-button"]}
          />
          {/* </div> */}
        </form>
      </div>
      {/* <button onClick={callToast}>test</button> */}
      {isShow ? (
        <ErrorShow
          errorMessage={isShow}
          onClose={() => {
            setShow(null);
          }}
        />
      ) : null}
    </>
  );
};

export { NetworkDefinition };
