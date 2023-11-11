import io from 'socket.io-client';

const initializeSocket = (username, team) => {
  return io('http://localhost:4000', {
    query: {
      username,
      team,
    },
  });
};

const socket = initializeSocket('', ''); // Initializing with empty values, update when needed

export { socket, initializeSocket };