import React from 'react'
import { socket } from "./Socket";
import Socket from './Socket'
import "../css/chatspace.css";
const Chatspace = (passedData) => {

  return (
    <div className='chat-messages'>
      <div className='message'>
        <p className="meta"><span>BRAD</span>  9:14pm</p>
        <p className='text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt adipisci modi totam alias ex et unde! Eligendi molestias dolorem illum voluptate blanditiis facilis, dolorum, dolores deleniti nihil repellat aliquid expedita.
        </p>
      </div>
    </div>
  )
}

export default Chatspace