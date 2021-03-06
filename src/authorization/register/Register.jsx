import React from "react";
import "../authorization.css";
import Input from "../input/Input";

function Register() {
  return (
    <div className="register">
      <div className="entryField">
        <h2>Register</h2>
        <Input text="Email" value="Example@gmail.com" />
        <Input text="Full name" value="Tony Stark" />
        <Input text="Password" eye="true" />
        <Input text="Password again" eye="true" />
        <button>Register</button>
      </div>
      <div className="messageHelp">
        <p>
          I already have an account,<span> LOG IN</span>
        </p>
      </div>
    </div>
  );
}
export default Register;
