import React, { useState, useEffect } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ConfigDataContext } from "../../context/ConfigDataContext";
import { General } from "../../component/dashboard/cofiguration/general/General";
import { Pcscf } from "../../component/dashboard/cofiguration/pcscf/Pcscf";
import { Icscf } from "../../component/dashboard/cofiguration/icscf/Icscf";
import { Scscf } from "../../component/dashboard/cofiguration/scscf/Scscf";
import { MyButton } from "../../component/dashboard/cofiguration/myButton/MyButton";
import { RtpProxy } from "../../component/dashboard/cofiguration/rtpProxy/RtpProxy";
import classes from "./configuration.module.css";
import classNames from "classnames";

const Configuration = () => {
  const methods = useForm({ mode: "onChange" });
  const [pcrfIpAddress, setPcrfIpAddress] = useState();
  const [configData, setConfigData] = useState(undefined);
  const url = "https://35a474cb-4d59-4846-8b43-fc913daf7a5f.mock.pstmn.io";
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
      pcscf_private_memory: Number(data.pcscf_private_memory),
      pcscf_shared_memory: Number(data.pcscf_shared_memory),
      scscf_private_memory: Number(data.scscf_private_memory),
      scscf_shared_memory: Number(data.scscf_shared_memory),
      icscf_private_memory: Number(data.icscf_private_memory),
      icscf_shared_memory: Number(data.icscf_shared_memory),
      call_duration: Number(data.call_duration),
      inbound_port_maximum: Number(data.inbound_port_maximum),
      inbound_port_minimum: Number(data.inbound_port_minimum),
      outbound_port_maximum: Number(data.outbound_port_maximum),
      outbound_port_minimum: Number(data.outbound_port_minimum),
      maximum_register_time: Number(data.maximum_register_time),
      minimum_register_time: Number(data.minimum_register_time),
      rtp_proxy_loss_timeout: Number(data.rtp_proxy_loss_timeout),
      rx_source_port: Number(data.rx_source_port),
      pcrf_ip: pcrfIpAddress,
    };

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
    methods.setValue("ims_domain", response.data.domain);
    methods.setValue("enable_homer_pcscf", response.data.homerEnable.pcscf);
    methods.setValue("enable_homer_scscf", response.data.homerEnable.scscf);
    methods.setValue("enable_homer_icscf", response.data.homerEnable.icscf);

    methods.setValue("pcscf_shared_memory", response.data.pcscf.shareMemory);
    methods.setValue("pcscf_private_memory", response.data.pcscf.privateMemory);
    methods.setValue("enable_ipsec", response.data.pcscf.ipSec);
    methods.setValue("enable_tls", response.data.pcscf.tls);

    methods.setValue(
      "encryption_algorithm_aes",
      response.data.pcscf.algorithms.aes
    );
    methods.setValue(
      "encryption_algorithm_des",
      response.data.pcscf.algorithms.des
    );

    methods.setValue(
      "encryption_algorithm_plain",
      response.data.pcscf.algorithms.plain
    );

    methods.setValue(
      "enable_rx_source_port",
      response.data.pcscf.rxConfiguration.sourcePortEnabled
    );

    methods.setValue(
      "rx_source_port",
      response.data.pcscf.rxConfiguration.sourcePort
    );
    methods.setValue("pcrf_fqdn", response.data.pcscf.rxConfiguration.fqdn);
    methods.setValue("pcrf_realm", response.data.pcscf.rxConfiguration.realm);

    methods.setValue(
      "transport_protocol",
      response.data.pcscf.rxConfiguration.protocol
    );

    methods.setValue("icscf_shared_memory", response.data.icscf.shareMemory);
    methods.setValue("icscf_private_memory", response.data.icscf.privateMemory);

    methods.setValue("scscf_shared_memory", response.data.scscf.shareMemory);
    methods.setValue("scscf_private_memory", response.data.scscf.privateMemory);
    methods.setValue(
      "maximum_register_time",
      response.data.scscf.maximumRegisterTime
    );
    methods.setValue(
      "minimum_register_time",
      response.data.scscf.minimumRegisterTime
    );

    methods.setValue(
      "supported_hd_codes_g722",
      response.data.rtpProxy.supportedHdCoders.g722
    );
    methods.setValue(
      "supported_hd_codes_amr_wb",
      response.data.rtpProxy.supportedHdCoders.armwb
    );

    methods.setValue(
      "enable_call_duration",
      response.data.rtpProxy.maximumCallDurationEnable
    );
    methods.setValue("enable_srtp", response.data.rtpProxy.srtp);

    methods.setValue(
      "inbound_port_minimum",
      response.data.rtpProxy.inboundPortMinimum
    );
    methods.setValue(
      "inbound_port_maximum",
      response.data.rtpProxy.inboundPortMaximum
    );
    methods.setValue(
      "outbound_port_minimum",
      response.data.rtpProxy.outboundPortMinimum
    );
    methods.setValue(
      "outbound_port_maximum",
      response.data.rtpProxy.outboundPortMaximum
    );
    methods.setValue(
      "call_duration",
      response.data.rtpProxy.maximumCallDuration
    );
    methods.setValue(
      "rtp_proxy_loss_timeout",
      response.data.rtpProxy.rtpLossTimeout
    );

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
