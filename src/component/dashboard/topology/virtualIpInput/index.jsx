import { useEffect, useState } from "react";
import React from "react";
import "../VirtualIps.css";
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
  console.log(form);
  return (
    <div class="virtual-ips-database virtual-ips-content">
      <div class="d-flex flex-row justify-content-between align-items-center">
        <span class="virtual-ips-main-text">{mainTitle}</span>
        <div class="virtual-ips-boxes d-flex flex-row justify-content-between align-items-center">
          <input
            type="text"
            name="field1"
            class="ip-octet1 ip-octet"
            id="virtual-ips-database-octet1"
            onChange={handleChange}
          />
          <input
            type="text"
            name="field2"
            class="ip-octet2 ip-octet"
            id="virtual-ips-database-octet2"
            onChange={handleChange}
          />
          <input
            type="text"
            name="field3"
            class="ip-octet3 ip-octet"
            id="virtual-ips-database-octet3"
            onChange={handleChange}
          />
          <input
            type="text"
            name="field4"
            class="ip-octet4 ip-octet"
            id="virtual-ips-database-octet4"
            onChange={handleChange}
          />
        </div>
      </div>

      <div class="virtual-ips-down-text">{subTitle}</div>
    </div>
  );
};

export { VirtualIpInput };
