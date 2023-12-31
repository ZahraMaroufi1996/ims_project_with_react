import { useEffect, useState } from "react";
import classes from "../NetworkDefinition.module.css";
import classNames from "classnames";
const IpInput = ({ onChange, title }) => {
  const [form, setForm] = useState({
    field1: "",
    field2: "",
    field3: "",
    field4: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  useEffect(() => {
    const ip = `${form.field1}.${form.field2}.${form.field3}.${form.field4}`;
    onChange(ip);
  }, [form.field1, form.field2, form.field3, form.field4]);
  return (
    <div
      className={classNames(
        title === "gateway"
          ? classes[`network-definition-gateway`]
          : classes[`network-definition-subnetmask`],
        "d-flex",
        "flex-row",
        "justify-content-between",
        "align-items-center"
      )}
    >
      <span>{title}</span>
      <input
        type="text"
        name="field1"
        class={classes["ip-octet"]}
        id="network-definition-subnetmask-octet1"
        onChange={handleChange}
      />
      <input
        type="text"
        name="field2"
        class={classes["ip-octet"]}
        id="network-definition-subnetmask-octet2"
        onChange={handleChange}
      />
      <input
        type="text"
        name="field3"
        class={classes["ip-octet"]}
        id="network-definition-subnetmask-octet3"
        onChange={handleChange}
      />
      <input
        type="text"
        name="field4"
        class={classes["ip-octet"]}
        id="network-definition-subnetmask-octet4"
        onChange={handleChange}
      />
    </div>
  );
};

export { IpInput };
