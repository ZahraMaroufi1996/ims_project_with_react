import { forwardRef } from "react";
import Select from "react-select";
import classes from "./SelectComponent.module.scss";
import classNames from "classnames";
const options = [
  { value: "folan", label: "Folan", color: "#1F666E" },
  { value: "bisar", label: "Bisar", color: "#1F666E" },
  { value: "bahman", label: "Bahman", color: "#1F666E" },
  { value: "folan2", label: "Folan2", color: "#1F666E" },
  { value: "bisar2", label: "Bisar2", color: "#1F666E" },
  { value: "bahman2", label: "Bahman2", color: "#1F666E" },
  { value: "folan3", label: "Folan3", color: "#1F666E" },
  { value: "bisar3", label: "Bisar3", color: "#1F666E" },
  { value: "bahman3", label: "Bahman3", color: "#1F666E" },
];

const SelectComponent = forwardRef(
  ({ title, id, replace, name, ...rest }, ref) => {
    console.log(rest);
    const customStyles = {
      control: (provided) => (
        {
          ...provided,
          width: "10.42vw",
          height: "3.7vh",
          borderRadius: "0.65vh",
          backgroundColor: "#eef5f2",
          border: "none",
          color: "#1a4348",
          fontSize: "1.48vh",
          fontFamily: `"FiraGO", sans-serif"`,
        },
        console.log(provided)
      ),
    };
    console.log(customStyles);
    return (
      <>
        <label htmlForfor={id}>{title}</label>
        {/* <Select ref={ref} options={options} styles={customStyles} /> */}
      </>
    );
  }
);
export { SelectComponent };
