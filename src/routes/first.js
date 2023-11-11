import React , {useState} from 'react'
import '../css/first.css'
import SocketIn from "../components/Socket";
import { socket, initializeSocket } from "../util/socket"
import { useNavigate } from 'react-router-dom';
const moment = require('moment');


const First = () => {

    let navigate = useNavigate();

    const [inputTeamValue, setInputTeamValue] = useState("");
    const [inputUsernameValue, setInputUsernameValue] = useState("");
    const [data, setData] = useState(null); // State to store the data

    const handleTeamInputValue = (e) => {
      setInputTeamValue(e.target.value);
    };

    const handleUsernameInputValue = (e) => {
        setInputUsernameValue(e.target.value);
      };

      const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log(inputTeamValue,inputUsernameValue)
        

     const data = {
            "team" : inputTeamValue,
            "username" : inputUsernameValue,
            time: moment().format('h:mm a')
        }

        setData(data);
        initializeSocket(data.username,data.team)
        console.log("loginData : ",data)
        socket.emit('loginData',data)
        navigate('/')
  
      }

  return (
    <div className='login'>
    <form className="loginspace" id="loginspace" onSubmit={handleLoginSubmit} >
      <h2>Login</h2>  
      <input
        className="loginfield"
        id="team"
        type="text"
        value={inputTeamValue}
        onChange={handleTeamInputValue}
        placeholder="Enter Team"
      />
       <input
        className="loginfield"
        id="username"
        type="text"
        value={inputUsernameValue}
        onChange={handleUsernameInputValue}
        placeholder="Enter Username"
      />
      <input className="loginbutton" type="submit" value="Send" />
    </form>
  </div>
  )
}


export default First
