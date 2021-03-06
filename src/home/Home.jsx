import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./home.css";

function Authorization() {
  const black = {
    background: "linear-gradient(180deg, #090810 0%, #171236 100%)",
  };
  return (
    <div className="authorization">
      <Header search={true} background={black} bgColor={"white"} />

      <Footer />
    </div>
  );
}
export default Authorization;
