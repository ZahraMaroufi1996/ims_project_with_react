import React, { useEffect } from "react";
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

  useEffect(() => {
    getConfigInfo();
  }, []);

  const getConfigInfo = () => {
    Axios.get(`${url}/api/configuration`)
      .then((response) => {
        console.log(response.data);
        methods.setValue("IMS_Domain", response.data.domain);
        methods.setValue("General-type-icon1", response.data.homerEnable.pcscf);
        methods.setValue("General-type-icon2", response.data.homerEnable.scscf);
        methods.setValue("General-type-icon3", response.data.homerEnable.icscf);

        methods.setValue("p_shared_memory", response.data.pcscf.shareMemory);
        methods.setValue("p_private_memory", response.data.pcscf.privateMemory);
        methods.setValue("Enable-IPsec", response.data.pcscf.ipSec);
        methods.setValue("Enable-TLS", response.data.pcscf.tls);

        methods.setValue(
          "Encryption-Algorithm-type-icon1",
          response.data.pcscf.algorithms.aes
        );
        methods.setValue(
          "Encryption-Algorithm-type-icon2",
          response.data.pcscf.algorithms.des
        );

        methods.setValue(
          "Encryption-Algorithm-type-icon3",
          response.data.pcscf.algorithms.plain
        );

        methods.setValue(
          "Enable-Rx-Source-Port",
          response.data.pcscf.rxConfiguration.sourcePortEnabled
        );

        methods.setValue(
          "Rx_Source_Port",
          response.data.pcscf.rxConfiguration.sourcePort
        );
        methods.setValue("PCRF_FQDN", response.data.pcscf.rxConfiguration.fqdn);
        methods.setValue(
          "PCRF_Realm",
          response.data.pcscf.rxConfiguration.realm
        );

        methods.setValue(
          "Transport_Protocol",
          response.data.pcscf.rxConfiguration.protocol
        );

        methods.setValue("i_shared_memory", response.data.icscf.shareMemory);
        methods.setValue("i_private_memory", response.data.icscf.privateMemory);

        methods.setValue("s_shared_memory", response.data.scscf.shareMemory);
        methods.setValue("s_private_memory", response.data.scscf.privateMemory);
        methods.setValue(
          "Maximum_Register_Time",
          response.data.scscf.maximumRegisterTime
        );
        methods.setValue(
          "Minimum_Register_Time",
          response.data.scscf.minimumRegisterTime
        );

        methods.setValue(
          "Supported-HD-Codecs-type-icon1",
          response.data.rtpProxy.supportedHdCoders.g722
        );
        methods.setValue(
          "Supported-HD-Codecs-type-icon2",
          response.data.rtpProxy.supportedHdCoders.armwb
        );

        methods.setValue(
          "Enable-Maximum-Call-Duration",
          response.data.rtpProxy.maximumCallDurationEnable
        );
        methods.setValue("Enable-SRTP", response.data.rtpProxy.srtp);

        methods.setValue(
          "Inbound_Port_Minimum",
          response.data.rtpProxy.inboundPortMinimum
        );
        methods.setValue(
          "Inbound_Port_Maximum",
          response.data.rtpProxy.inboundPortMaximum
        );
        methods.setValue(
          "Outbound_Port_Minimum",
          response.data.rtpProxy.outboundPortMinimum
        );
        methods.setValue(
          "Outbound_Port_Maximum",
          response.data.rtpProxy.outboundPortMaximum
        );
        methods.setValue(
          "Call_Duration",
          response.data.rtpProxy.maximumCallDuration
        );
        methods.setValue(
          "RTP_Loss_Timeout",
          response.data.rtpProxy.rtpLossTimeout
        );
      })
      .catch((err) => {
        console.log(err);
      });
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
