import React from "react";
import "./input.css";
import { Eye } from "./svgImport";

function Input(props) {
  function out() {
    return console.log("++++");
  }
  return (
    <div className="input">
      <b>{props.text}</b>
      <input type="text" size="40" placeholder={props.value} />
      {props.eye ? <Eye onClick={out} className="svgEye" color={"#000"} /> : ""}
    </div>
  );
}
export default Input;
