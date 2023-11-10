import React, { useState, useEffect } from "react";
import "../css/main.css";
import io from 'socket.io-client';
import { socket } from "./Socket";
import Socket from './Socket'

const Messagespace = () => {

  Socket();
  
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = inputValue;
    console.log(msg);

    // Assuming you have a "sendMessage" event on your server
    socket.emit("sendMessage", msg);

    // Clear the input field after sending the message
    setInputValue("");
  };

  return (
    <>
      <form className="messagespace" id="messagespace" onSubmit={handleSubmit}>
        <input
          className="textfield"
          id="msg"
          type="text"
          value={inputValue}
          onChange={handleInputValue}
          placeholder="Enter Message"
        />
        <input className="send" type="submit" value="Send" />
      </form>
    </>
  );
};

export default Messagespace;
