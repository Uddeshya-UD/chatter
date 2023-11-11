import React, { useState, useEffect  } from "react";
import { useLocation } from 'react-router-dom';
import { socket, initializeSocket } from "../util/socket"

import "../css/messagespace.css";


// const chatMessages = document.querySelector('.chat-messages');
const Messagespace = () => {

  const location = useLocation();
  const data = location.state ? location.state.data : null;

  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = inputValue;
    console.log(msg,data);
    
    socket.emit('sendMessage',msg)
   
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
