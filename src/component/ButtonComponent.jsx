import React from "react";

const ButtonComponent = ({ text, onClick, customClass }) => {
  return (
    <button className={customClass} onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonComponent;
