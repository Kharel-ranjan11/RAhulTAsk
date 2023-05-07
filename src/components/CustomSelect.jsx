import React, { useState } from "react";
import Select from "react-select";

const CustomSelect = ({ options }) => {
  const [value, setValue] = useState(null);
  const colorStyles = {
    control: (styles) => ({
      ...styles,
      borderColor: styles.isFocused ? "#f21d3d" : "#f21d3d",
      boxShadow: styles.isFocused
        ? "0 0 0 transparent"
        : "0 0 0 transparent",
      "&:hover": {
        borderColor: styles.isFocused ? "#f21d3d" : "#f21d3d",
      },
    }),
    option: (styles, { data,isDisabled, isFocused, isSelected }) => {
      return { ...styles, color: data.color,
      "&:hover":{backgroundColor:"#f21d3d67"}
      };
    },
  };
  return (
    <>
      <Select
        options={options}
        defaultvalue={value}
        onChange={setValue}
        styles={colorStyles}
        className="select"
      />
    </>
  );
};

export default CustomSelect;
