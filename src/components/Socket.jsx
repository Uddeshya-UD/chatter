import io from 'socket.io-client';
import React, { useEffect } from 'react';

const socket = io('http://localhost:4000');

const Socket = () => {
  // Connect to the Socket.io server
  useEffect(() => {
    console.log('Connecting to the server...');

    // Add event listeners or emit events as needed
    socket.on('connect', () => {
      console.log('Connected to the socket server');
    });

    socket.emit('sendMessage', 'Hello, server!');

    // Cleanup on component unmount
    
  }, []);

  return <></>;
};

export { socket };
export default Socket;
