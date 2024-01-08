import React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import Axios from "axios";

import { General } from "../component/dashboard/cofiguration/General";
import { Pcscf } from "../component/dashboard/cofiguration/Pcscf";
import { Icscf } from "../component/dashboard/cofiguration/Icscf";
import { Scscf } from "../component/dashboard/cofiguration/Scscf";
import { RtpProxy } from "../component/dashboard/cofiguration/RtpProxy";

import classes from "./configuration.module.css";
import classNames from "classnames";

const Configuration = () => {
  const methods = useForm();

  const url = "https://88d188a7-0705-4aa4-b0f9-0d2781378c89.mock.pstmn.io";
  const onSubmit = (data) => {
    const token = localStorage.getItem("token");
    console.log(data);
    Axios.post(`${url}/api/configuration/submittForm`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {})
      .catch((error) => {});
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        id="total-form"
        className={classNames(classes["main-content"], "d-flex", "flex-row ")}
      >
        <div className="d-flex flex-column">
          <General />
          <Pcscf />
        </div>
        <div className="d-flex flex-column">
          <Icscf />
          <Scscf />
          <RtpProxy />
          <div className="d-flex">
            <button
              type="submit"
              className={classNames(classes["information-save-button"])}
            >
              Save
            </button>
            <button className={classNames(classes["information-edit-button"])}>
              Edit
            </button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

// const Configuration = () => {
//   const methods = useForm();
//   return (
//     <FormProvider>
//       <Configuration11 />
//     </FormProvider>
//   );
// };

export default Configuration;
