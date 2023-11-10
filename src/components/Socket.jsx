import io from 'socket.io-client';
import React, { useEffect } from 'react';

const socket = io('http://localhost:4000');

const Socket = () => {
  // Connect to the Socket.io server
  useEffect(() => {
    console.log('Connecting to the server...');

    // Cleanup on component unmount
      // Add event listeners or emit events as needed
  socket.on('connect', () => {
    console.log('Connected to the socket server');
  });

  socket.on('message', (data) => {
      console.log('Received message from server:', data);
    });


  }, []);



return <></>;

};

export { socket };
export default Socket;
