import { useEffect, useState } from "react";
import React from "react";
import classes from "./index.module.css";
import classNames from "classnames";

const VirtualIpInput = ({ onChange, mainTitle, subTitle }) => {
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
    <div className={classNames(classes["virtual-ips-content"])}>
      <div
        className={classNames(
          "d-flex",
          "justify-content-between",
          "align-items-center"
        )}
      >
        <span className={classNames(classes["virtual-ips-main-text"])}>
          {mainTitle}
        </span>
        <div
          className={classNames(
            classes["virtual-ips-boxes"],
            "d-flex",
            "justify-content-between",
            "align-items-center"
          )}
        >
          <input
            type="text"
            name="field1"
            className={classNames(classes["ip-octet"])}
            id="virtual-ips-database-octet1"
            onChange={handleChange}
          />
          <input
            type="text"
            name="field2"
            className={classNames(classes["ip-octet"])}
            id="virtual-ips-database-octet2"
            onChange={handleChange}
          />
          <input
            type="text"
            name="field3"
            className={classNames(classes["ip-octet"])}
            id="virtual-ips-database-octet3"
            onChange={handleChange}
          />
          <input
            type="text"
            name="field4"
            className={classNames(classes["ip-octet"])}
            id="virtual-ips-database-octet4"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={classNames(classes["virtual-ips-down-text"])}>
        {subTitle}
      </div>
    </div>
  );
};

export { VirtualIpInput };
