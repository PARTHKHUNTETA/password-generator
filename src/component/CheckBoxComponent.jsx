import React from "react";

const CheckBoxComponent = ({ onChange, title, checkedState }) => {
  return (
    <div>
      <input type="checkbox" checked={checkedState} onChange={onChange} />
      <label>{title}</label>
    </div>
  );
};

export default CheckBoxComponent;
