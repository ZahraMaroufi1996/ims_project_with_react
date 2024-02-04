import { useEffect, useState } from "react";
import { forwardRef } from "react";
import classes from "./SelectComponent.module.css";
import classNames from "classnames";
const SelectComponent = forwardRef(({ title, id, replace, ...rest }, ref) => {
  // const handleChange = (e) => {
  //   onChange(e.target.value);
  // };

  return (
    <>
      <label htmlForfor={id}>{title}</label>
      <select
        // name="nodes"
        // id="nodes"
        className={classNames(classes["node-name-box"])}
        // onChange={handleChange}
        {...rest}
        onChange={(e) => {
          rest.onChange(e);
        }}
        id={id}
        ref={ref}
      >
        <option value="folan">Folan</option>
        <option value="bisar">Bisar</option>
        <option value="bahman">Bahman</option>
        <option value="folan">Folan2</option>
        <option value="bisar">Bisar2</option>
        <option value="bahman">Bahman2</option>
      </select>
    </>
  );
});
export { SelectComponent };
