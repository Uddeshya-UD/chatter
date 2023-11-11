import io from "socket.io-client";
import React, { useEffect } from "react";

const socket = io("http://localhost:4000");

  
function outputMessage(message) {
  const div = document.createElement("div");
  div.classList.add("message");
  div.innerHTML = ` <p className="meta">${message.username}<span></span>${message.time}</p>
  <p className='text'>
    ${message.text}
  </p>`;
  document.querySelector(".chat-messages").appendChild(div);
}


const Socket = () => {

  // Connect to the Socket.io server

    console.log("Connecting to the server...");
  
    // Cleanup on component unmount
    // Add event listeners or emit events as needed
    socket.on("connect", () => {
      console.log("Connected to the socket server");
    });
  
    socket.on("message", (data) => {
      outputMessage(data);
      const chatMessages = document.querySelector(".chat-messages")
  
      // Scroll to end
      chatMessages.scrollTop = chatMessages.scrollHeight
    });


  return <></>;
};

export { socket , Socket}
