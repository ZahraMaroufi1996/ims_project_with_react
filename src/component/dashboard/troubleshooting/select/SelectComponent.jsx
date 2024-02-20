import { useEffect, useState } from "react";
import { forwardRef } from "react";
// import Select from "react-select";
import classes from "./SelectComponent.module.css";
import classNames from "classnames";
const SelectComponent = forwardRef(({ title, id, ...rest }, ref) => {
  const [searchInput, setSearchInput] = useState("");

  const options = [
    { value: "folan", label: "Folan" },
    { value: "bisar", label: "Bisar" },
    { value: "bahman", label: "Bahman" },
    { value: "folan2", label: "Folan2" },
    { value: "bisar2", label: "Bisar2" },
    { value: "bahman2", label: "Bahman2" },
    { value: "folan3", label: "Folan3" },
    { value: "bisar3", label: "Bisar3" },
    { value: "bahman3", label: "Bahman3" },
  ];

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
        // type={"search"}
      />

      {/* <Select
        options={options}
        isClearable={true}
        placeholder="Search..."
        {...rest}
        onChange={(e) => {
          rest.onChange(e);
        }}
        ref={ref}
      /> */}

      <option value="folan">Folan</option>
      <option value="bisar">Bisar</option>
      <option value="bahman">Bahman</option>
      <option value="folan">Folan2</option>
      <option value="bisar">Bisar2</option>
      <option value="bahman">Bahman2</option>
    </select>
  );
});
export { SelectComponent };
