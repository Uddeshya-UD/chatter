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

    e.preventDefault()


    // Assuming you have a "sendMessage" event on your server
    socket.emit("sendMessage", msg);

    outputMessage(msg);
    // Clear the input field after sending the message
    setInputValue("");
  };


  function outputMessage(message){
    const div = document.createElement('div')
    div.classList.add('message');
    div.innerHTML = ` <p className="meta"Brad><span></span>9:12pm</p>
    <p className='text'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt adipisci modi totam alias ex et unde! Eligendi molestias dolorem illum voluptate blanditiis facilis, dolorum, dolores deleniti nihil repellat aliquid expedita.
    </p>`;
    document.querySelector('.chat-messages').appendChild(div)
  }

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
