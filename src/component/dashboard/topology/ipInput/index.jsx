import { useEffect, useState, useRef } from "react";
import Axios from "axios";
import classes from "./index.module.css";
import classNames from "classnames";
const IpInput = ({ onChange, title, className }) => {
  const url = "https://c6059f0c-d4f4-45f8-9187-a1d3da3b8645.mock.pstmn.io";
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
    Axios.get(`${url}/api/topology`)
      .then((response) => {
        if (title === "subnetmask")
          setForm((prevForm) => ({
            ...prevForm,
            field1: response.data.subnetMask.split(".")[0],
            field2: response.data.subnetMask.split(".")[1],
            field3: response.data.subnetMask.split(".")[2],
            field4: response.data.subnetMask.split(".")[3],
          }));
        else if (title === "gateway")
          setForm((prevForm) => ({
            ...prevForm,
            field1: response.data.gateway.split(".")[0],
            field2: response.data.gateway.split(".")[1],
            field3: response.data.gateway.split(".")[2],
            field4: response.data.gateway.split(".")[3],
          }));
        else if (title === "IP address")
          setForm((prevForm) => ({
            ...prevForm,
            field1: "",
            field2: "",
            field3: "",
            field4: "",
          }));
      })
      .catch((err) => {
        console.log("Problemmm");
      });
  };

  useEffect(() => {
    const ip = `${form.field1}.${form.field2}.${form.field3}.${form.field4}`;
    if (onChange) onChange(ip);
  }, [form.field1, form.field2, form.field3, form.field4]);

  // useEffect(() => {
  //   getNetworkInfo();
  // }, []);

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
        id="network-definition-subnetmask-octet1"
        onChange={handleChange}
      />
      <input
        // ref={input2Ref}
        // onKeyDown={(event) => handleKeyPress(event, input3Ref)}
        type="text"
        name="field2"
        value={form.field2}
        class={classes["ip-octet"]}
        id="network-definition-subnetmask-octet2"
        onChange={handleChange}
      />
      <input
        // ref={input3Ref}
        // onKeyDown={(event) => handleKeyPress(event, input4Ref)}
        type="text"
        name="field3"
        value={form.field3}
        class={classes["ip-octet"]}
        id="network-definition-subnetmask-octet3"
        onChange={handleChange}
      />
      <input
        // ref={input4Ref}
        // onKeyDown={(event) => handleKeyPress(event, input1Ref)}
        type="text"
        name="field4"
        value={form.field4}
        class={classes["ip-octet"]}
        id="network-definition-subnetmask-octet4"
        onChange={handleChange}
      />
    </div>
  );
};

export { IpInput };
