import React, { useContext, useState } from 'react'
import './Login.css'
import loginimg from './login.png';
import { Diaryctx } from '../contex/mooddiaryctx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [email,setemail] = useState();
  const [password,setpassword]  = useState();
  const ctx = useContext(Diaryctx);
  const navigate = useNavigate();

  const emailhandler = (e)=>{
    setemail(e.target.value);
  }

  const passwordhandler = (e)=>{
    setpassword(e.target.value);
  }

  const submithandler = async (e)=>{
    
    e.preventDefault();
    await axios.post('http://localhost:8000/mooddairy/user/login',{email:email,password:password})
    .then((respoce)=>{
      console.log(respoce.data);
      ctx.setlogintocken(respoce.data);
      localStorage.setItem('tocken',JSON.stringify(respoce.data));
      console.log(respoce.data.email);
    })
    
    
    navigate('/user');  
  }

  return (
    <div>
    <header className='login_header'>MOOD DAIRY</header>
    <div className='outerform_div'>
    <div className='form_div'>
      <form onSubmit={submithandler}>
        <div className='textlogin'>
        <p>Welcome!</p>
        
        </div>
        <input type='text' className='inputlogin' placeholder='email' onChange={emailhandler}/><br/>
        <input type='password' className='inputlogin' placeholder='password' onChange={passwordhandler}/><br/>
        <button type='submit' className='loginbut'>Login</button>
        <br/>
        <p>Don't have an account?<a href='/register'>Register</a></p>
      </form>
    </div>
    <div><img src={loginimg} className = 'imagediv'></img></div>

    </div>
    </div>
  )
}
