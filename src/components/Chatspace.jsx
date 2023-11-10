import React from 'react'
import { socket } from "./Socket";
import Socket from './Socket'
const Chatspace = () => {

  return (
    <div className='chat-messages'>
      <div className='message'>
        <p className="meta"Brad><span></span>9:12pm</p>
        <p className='text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt adipisci modi totam alias ex et unde! Eligendi molestias dolorem illum voluptate blanditiis facilis, dolorum, dolores deleniti nihil repellat aliquid expedita.
        </p>
      </div>
    </div>
  )
}

export default Chatspace