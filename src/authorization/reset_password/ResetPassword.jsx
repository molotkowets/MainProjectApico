import React from "react";
import "../authorization.css";
import Input from "../input/Input";

function ResetPassword() {
  return (
    <div className="register">
      <div className="entryField">
        <h2>Restore Password</h2>
        <Input text="Email" value="Example@gmail.com" />
        <button>Continue</button>
      </div>
    </div>
  );
}
export default ResetPassword;
