import { useEffect, useState } from "react";
import { forwardRef } from "react";
import classes from "./SelectComponent.module.css";
import classNames from "classnames";
// import Select from "react-select";

// const options = [
//   { value: "folan", label: "Folan", color: "#1F666E" },
//   { value: "bisar", label: "Bisar", color: "#1F666E" },
//   { value: "bahman", label: "Bahman", color: "#1F666E" },
//   { value: "folan2", label: "Folan2", color: "#1F666E" },
//   { value: "bisar2", label: "Bisar2", color: "#1F666E" },
//   { value: "bahman2", label: "Bahman2", color: "#1F666E" },
//   { value: "folan3", label: "Folan3", color: "#1F666E" },
//   { value: "bisar3", label: "Bisar3", color: "#1F666E" },
//   { value: "bahman3", label: "Bahman3", color: "#1F666E" },
// ];

const SelectComponent = forwardRef(({ title, id, replace, ...rest }, ref) => {
  // if you want to use from select-react component , use this comment.
  // const customStyles = {
  //   control: (provided) => (
  //     {
  //       ...provided,
  //       width: "10.42vw",
  //       height: "3.7vh",
  //       borderRadius: "0.65vh",
  //       backgroundColor: "#eef5f2",
  //       border: "none",
  //       color: "#1a4348",
  //       fontSize: "1.48vh",
  //       fontFamily: `"FiraGO", sans-serif"`,
  //     },
  //     console.log(provided)
  //   ),
  // };
  // console.log(customStyles);
  // return (
  //   <>
  //     <label htmlForfor={id}>{title}</label>
  //     <Select ref={ref} options={options} styles={customStyles} />
  //   </>
  // );
  console.log(rest);
  return (
    <>
      <label htmlFor={id}>{title}</label>
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
        <option value="folan2">Folan2</option>
        <option value="bisar2">Bisar2</option>
        <option value="bahman2">Bahman2</option>
      </select>
    </>
  );
});
export { SelectComponent };
