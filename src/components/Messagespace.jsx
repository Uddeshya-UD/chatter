import React , { useState } from 'react'
import '../css/main.css'

const Messagespace = () => {
    
const [inputValue , setInputValue] = useState('')

const handleInputValue = (e) => {
    setInputValue(e.target.value)
};


  return (
    <div className='messagespace'>
        <input className='textfield' type='text' value={inputValue} onChange={handleInputValue} placeholder='Message'/>
        <input className='send' type='submit' placeholder='send'/>
    </div>
  )
}

export default Messagespace