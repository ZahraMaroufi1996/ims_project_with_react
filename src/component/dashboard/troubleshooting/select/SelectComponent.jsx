import { useEffect, useState } from "react";
import { forwardRef } from "react";
import classes from "./SelectComponent.module.css";
import classNames from "classnames";
const SelectComponent = forwardRef(({ title, id, replace, ...rest }, ref) => {
  return (
    <>
      <label htmlForfor={id}>{title}</label>
      <select
        className={classNames(classes["node-name-box"])}
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
