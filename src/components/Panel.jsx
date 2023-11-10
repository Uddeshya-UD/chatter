import React from 'react'
import '../css/main.css'
const Panel = () => {
  return (
    <div className='panel'>
    <div className='room'>
            <h2>Room name :</h2>
                <l1 className="room-name">Room 1</l1>
    </div>
    <div className='users'>
            <h2>Users</h2>
                <l1 className="user-items">ram</l1>
                <l1 className="user-items">ram</l1>
                <l1 className="user-items">ram</l1>
           
    
    </div>
   </div>
  );
}

export default Panel