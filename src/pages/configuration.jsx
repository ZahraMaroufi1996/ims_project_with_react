import React, { useState, useEffect } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ConfigDataContext } from "../../src/context/ConfigDataContext";
import { General } from "../component/dashboard/cofiguration/general/General";
import { Pcscf } from "../component/dashboard/cofiguration/pcscf/Pcscf";
import { Icscf } from "../component/dashboard/cofiguration/icscf/Icscf";
import { Scscf } from "../component/dashboard/cofiguration/scscf/Scscf";
import { MyButton } from "../component/dashboard/cofiguration/myButton/MyButton";
import { RtpProxy } from "../component/dashboard/cofiguration/rtpProxy/RtpProxy";
import classes from "./configuration.module.css";
import classNames from "classnames";

const Configuration = () => {
  const methods = useForm({ mode: "onChange" });
  const [pcrfIpAddress, setPcrfIpAddress] = useState();
  const [configData, setConfigData] = useState(undefined);
  const url = "https://ba09580e-e7a2-4d8f-ac33-1e59e5594f17.mock.pstmn.io";
  const token = localStorage.getItem("token");
  const handleOnChangeIpAddress = (value) => {
    setPcrfIpAddress(value);
  };

  const toggleConfigData = (value) => {
    setConfigData(value);
  };
  const onSubmit = (data) => {
    const newData = {
      ...data,
      p_private_memory: Number(data.p_private_memory),
      p_shared_memory: Number(data.p_shared_memory),
      s_private_memory: Number(data.s_private_memory),
      s_shared_memory: Number(data.s_shared_memory),
      i_private_memory: Number(data.i_private_memory),
      i_shared_memory: Number(data.i_shared_memory),
      Call_Duration: Number(data.Call_Duration),
      Inbound_Port_Maximum: Number(data.Inbound_Port_Maximum),
      Inbound_Port_Minimum: Number(data.Inbound_Port_Minimum),
      Outbound_Port_Maximum: Number(data.Outbound_Port_Maximum),
      Outbound_Port_Minimum: Number(data.Outbound_Port_Minimum),
      Maximum_Register_Time: Number(data.Maximum_Register_Time),
      Minimum_Register_Time: Number(data.Minimum_Register_Time),
      RTP_Loss_Timeout: Number(data.RTP_Loss_Timeout),
      Rx_Source_Port: Number(data.Rx_Source_Port),
      PCRF_IP: pcrfIpAddress,
    };
    console.log(newData);
    Axios.post(`${url}/api/configuration/submittForm`, newData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status == 200) {
          toast("Your request was done successfully!");
        }
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  const setInputValue = (response) => {
    methods.setValue("IMS_Domain", response.data.domain);
    methods.setValue("General_type_icon1", response.data.homerEnable.pcscf);
    methods.setValue("General_type_icon2", response.data.homerEnable.scscf);
    methods.setValue("General_type_icon3", response.data.homerEnable.icscf);

    methods.setValue("p_shared_memory", response.data.pcscf.shareMemory);
    methods.setValue("p_private_memory", response.data.pcscf.privateMemory);
    methods.setValue("Enable_IPsec", response.data.pcscf.ipSec);
    methods.setValue("Enable_TLS", response.data.pcscf.tls);

    methods.setValue(
      "Encryption_Algorithm_type_icon1",
      response.data.pcscf.algorithms.aes
    );
    methods.setValue(
      "Encryption_Algorithm_type_icon2",
      response.data.pcscf.algorithms.des
    );

    methods.setValue(
      "Encryption_Algorithm_type_icon3",
      response.data.pcscf.algorithms.plain
    );

    methods.setValue(
      "Enable_Rx_Source_Port",
      response.data.pcscf.rxConfiguration.sourcePortEnabled
    );

    methods.setValue(
      "Rx_Source_Port",
      response.data.pcscf.rxConfiguration.sourcePort
    );
    methods.setValue("PCRF_FQDN", response.data.pcscf.rxConfiguration.fqdn);
    methods.setValue("PCRF_Realm", response.data.pcscf.rxConfiguration.realm);

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
      "Supported_HD_Codecs_type_icon1",
      response.data.rtpProxy.supportedHdCoders.g722
    );
    methods.setValue(
      "Supported_HD_Codecs_type_icon2",
      response.data.rtpProxy.supportedHdCoders.armwb
    );

    methods.setValue(
      "Enable_Maximum_Call_Duration",
      response.data.rtpProxy.maximumCallDurationEnable
    );
    methods.setValue("Enable_SRTP", response.data.rtpProxy.srtp);

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
    methods.setValue("RTP_Loss_Timeout", response.data.rtpProxy.rtpLossTimeout);

    handleOnChangeIpAddress(response.data.pcscf.rxConfiguration.pcrfIp);
  };

  useEffect(() => {
    getConfigInfo();
  }, []);

  const getConfigInfo = () => {
    Axios.get(`${url}/api/configuration`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setConfigData(response.data);
        setInputValue(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ConfigDataContext.Provider value={{ configData, toggleConfigData }}>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          id="total-form"
          className={classNames(classes["main-content"], "d-flex", "flex-row ")}
        >
          <div className="d-flex flex-column">
            <General />
            <Pcscf onChange={handleOnChangeIpAddress} />
          </div>
          <div className="d-flex flex-column">
            <Icscf />
            <Scscf />
            <RtpProxy />
            <div className="d-flex">
              <MyButton
                title={"Save"}
                className={classes["information-save-button"]}
              />
              <MyButton
                title={"Edit"}
                className={classes["information-edit-button"]}
              />
            </div>
          </div>
        </form>
        <ToastContainer />
      </FormProvider>
    </ConfigDataContext.Provider>
  );
};

export default Configuration;
