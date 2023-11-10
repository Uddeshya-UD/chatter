import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Main from './routes/main'
import io from 'socket.io-client';


function App() {

  // useEffect(() => {
  //   // Connect to the Socket.io server
  //   const socket = io('http://localhost:4000');
  //   console.log('Connecting to the server...');

  //   // Add event listeners or emit events as needed
  //   socket.on('connect', () => {
  //     console.log('Connected to the socket server');
  //   });

  //   socket.emit('sendMessage', 'Hello, server!');

  //   // Cleanup on component unmount
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  console.log('Rendered App component');

  return (
    <div className="App">
     <Router>
    <Routes>
    <Route path="/" element={<Main />} />
    </Routes>
   </Router>
    </div>
  );
}

export default App;
