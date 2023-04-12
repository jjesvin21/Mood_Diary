import React from 'react'
import { useNavigate } from 'react-router-dom'
import Imghome from '../imghome/Imghome'
import './home.css'

export default function Home() {
  const navigate  = useNavigate();
  return (
    <div className='homeOuter'>
        
        <div className= "innerdiv">
            <Imghome/>
            <h1 className='homeh1'>
                MOOD DAIRY
            </h1>
            <button className='homebuttion' onClick={()=>(navigate('/login'))}>Log In</button>
            <p>if you are not registed <a href = "/register" className='homelink'>sign up</a></p>
            
        </div>

    </div>
  )
}
