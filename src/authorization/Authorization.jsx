import React from "react";
import Header from "../header/Header";
import Register from "./register/Register";
import Footer from "../footer/Footer";
import Login from "./login/Login";
import ResetPassword from "./reset_password/ResetPassword";
import "./authorization.css";
import { BrowserRouter, Route } from "react-router-dom";

function Authorization() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <div className="authorization">
          <Header bgColor={"#262525"} />
          <Route path="/Authorization/register" component={Register} />
          <Route path="/Authorization/login" component={Login} />
          <Route
            path="/Authorization/resetPassword"
            component={ResetPassword}
          />

          {/* <Register /> */}
          <Footer />
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
}
export default Authorization;
