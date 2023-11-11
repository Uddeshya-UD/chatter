import React, { useEffect } from 'react';


import { socket, initializeSocket } from "../util/socket"
const SocketIn = (logindata) => {

  function outputMessage(message) {
    const div = document.createElement("div");
    div.classList.add("message");
    div.innerHTML = ` <p className="meta">${message.username}<span></span>  ${message.time}</p>
    <p className='text'>
      ${message.text}
    </p>`;
    document.querySelector(".chat-messages").appendChild(div);
  }
  

  
  useEffect(() => {
    socket.connect();

    socket.on("connect", handleConnect);
    socket.on("message", handleMessage);
    socket.on("loginData", handleLoginData);
    socket.on("disconnect", handleDisconnect);

    return () => {
      // Cleanup: Disconnect the socket when the component unmounts
      socket.disconnect();
    };
  }, [logindata]); // Include logindata as a dependency to re-establish connection when it changes

  const handleConnect = () => {
    console.log("Connected to the socket server");
  };

  const handleMessage = (data) => {
    outputMessage(data);
    const chatMessages = document.querySelector(".chat-messages");
    chatMessages.scrollTop = chatMessages.scrollHeight;
  };

  const handleLoginData = (data) => {
    console.log("LoginData from server", data);
    outputMessage(data);
  };

  const handleDisconnect = () => {
    console.log("User has left the server");
  };

  return <></>;
};

export default SocketIn; // Corrected case of the export
