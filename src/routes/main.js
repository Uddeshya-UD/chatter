import React from "react";
import Navbar from "../components/Navbar";
import Panel from "../components/Panel";
import Chatspace from "../components/Chatspace";
import '../css/main.css'
import Messagespace from "../components/Messagespace";

const Main = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="section-1">
        <Panel />
        <Chatspace />
      </div>
      <div className="section-2">
        <Messagespace />
      </div>
    </div>
  );
};

export default Main;
