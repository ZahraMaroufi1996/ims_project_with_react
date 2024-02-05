import { useEffect, useState, useRef, useContext } from "react";
import { TopologyDataContext } from "../../../../context/TopologyDataContext";
import Axios from "axios";
import classes from "./index.module.css";
import classNames from "classnames";
const IpInput = ({ onChange, title, className }) => {
  const url = "https://cdfb4ab4-65e8-498e-890c-570e0ade6a15.mock.pstmn.io";
  const { topologyData, toggleTopologyData } = useContext(TopologyDataContext);

  console.log(topologyData);
  const [form, setForm] = useState({
    field1: "",
    field2: "",
    field3: "",
    field4: "",
  });

  // const input1Ref = useRef(null);
  // const input2Ref = useRef(null);
  // const input3Ref = useRef(null);
  // const input4Ref = useRef(null);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  // // Function to move focus to the next input field
  // function moveFocus(nextInputRef) {
  //   nextInputRef.current.focus();
  // }

  // // Function to handle the Enter key press
  // function handleKeyPress(event, nextInputRef) {
  //   if (event.key === "Enter") {
  //     // Move focus to the next input field
  //     moveFocus(nextInputRef);
  //   }
  // }

  const getNetworkInfo = () => {
    if (title === "subnetmask")
      setForm((prevForm) => ({
        ...prevForm,
        field1: topologyData?.subnetMask.split(".")[0],
        field2: topologyData?.subnetMask.split(".")[1],
        field3: topologyData?.subnetMask.split(".")[2],
        field4: topologyData?.subnetMask.split(".")[3],
      }));
    else if (title === "gateway")
      setForm((prevForm) => ({
        ...prevForm,
        field1: topologyData?.gateway.split(".")[0],
        field2: topologyData?.gateway.split(".")[1],
        field3: topologyData?.gateway.split(".")[2],
        field4: topologyData?.gateway.split(".")[3],
      }));
    else if (title === "IP address")
      setForm((prevForm) => ({
        ...prevForm,
        field1: "",
        field2: "",
        field3: "",
        field4: "",
      }));
  };

  useEffect(() => {
    const ip = `${form.field1}.${form.field2}.${form.field3}.${form.field4}`;
    if (onChange) onChange(ip);
  }, [form.field1, form.field2, form.field3, form.field4]);

  useEffect(() => {
    getNetworkInfo();
  }, [topologyData]);

  return (
    <div
      className={classNames(
        className,
        "d-flex",
        "justify-content-between",
        "align-items-center"
      )}
    >
      <span>{title}</span>
      <input
        // ref={input1Ref}
        // onKeyDown={(event) => handleKeyPress(event, input2Ref)}
        type="text"
        name="field1"
        value={form.field1}
        class={classes["ip-octet"]}
        onChange={handleChange}
      />
      <input
        // ref={input2Ref}
        // onKeyDown={(event) => handleKeyPress(event, input3Ref)}
        type="text"
        name="field2"
        value={form.field2}
        class={classes["ip-octet"]}
        onChange={handleChange}
      />
      <input
        // ref={input3Ref}
        // onKeyDown={(event) => handleKeyPress(event, input4Ref)}
        type="text"
        name="field3"
        value={form.field3}
        class={classes["ip-octet"]}
        onChange={handleChange}
      />
      <input
        // ref={input4Ref}
        // onKeyDown={(event) => handleKeyPress(event, input1Ref)}
        type="text"
        name="field4"
        value={form.field4}
        class={classes["ip-octet"]}
        onChange={handleChange}
      />
    </div>
  );
};

export { IpInput };
