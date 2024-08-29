import React from "react";

export default function Input({ labelName = "labelName", onChangeValue, inputvalue }) {
function validInput(event){
if(event.target.value>50){
    alert("More than Limit")
    event.target.value='';
}
}
  return (
    <div>
      <label>{labelName}</label>
      <input
        type="number"
        onInput={labelName === "Duration" ? validInput : undefined} 
        onChange={onChangeValue}
        placeholder={labelName} 
        value={inputvalue} required
      />
    </div>
  );
}
