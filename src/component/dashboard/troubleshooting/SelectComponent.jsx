import { useEffect, useState } from "react";
import classes from "../troubleshooting/SelectComponent.module.css";
import classNames from "classnames";
const SelectComponent = ({ onChange, title, replace }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <>
      <label for="cars">{title}</label>
      <select
        name="cars"
        id="cars"
        className={classNames(classes["node-name-box"])}
        onChange={handleChange}
      >
        <option className={classNames(classes["test"])} value={replace}>
          {replace}
        </option>
        <option value="bisar">Bisar</option>
        <option value="bahman">Bahman</option>
      </select>
    </>
  );
};

export { SelectComponent };
