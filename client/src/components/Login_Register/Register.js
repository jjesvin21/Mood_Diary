import React, { useState } from 'react'
import './Login.css'
import loginimg from './login.png';


import axios, * as others from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Register() {
  const [name,setname] = useState();
  const [email,setemail] = useState();
  const [password,setpassword] = useState();
  const navigate = useNavigate();


  const namehandler = (e)=>{
      setname(e.target.value);
  }
  const emailhandler = (e)=>{
    setemail(e.target.value);
  }
  const passwordhandler = (e)=>{
    setpassword(e.target.value);
  }
  const createnewuser = async (e)=>{
    e.preventDefault();
    await axios.post(process.env.REACT_APP_API+"/mooddairy/user/addnewuser",{email:email,name:name,password:password})
    .then((responce)=>{
      if(responce.status ===200)
      {
        navigate('/login');
      }
      else
      {
        navigate('/');
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div>
    <header className='login_header'>MOOD DAIRY</header>
    <div className='outerform_div'>
    <div className='form_div'>
      <form onSubmit={createnewuser}>
        <div className='textlogin'>
        <p>Welcome!</p>
        
        </div>
        <input type='text' className='inputlogin' placeholder='name' onChange={namehandler}/><br/>
        <input type='text' className='inputlogin' placeholder='email' onChange={emailhandler}/><br/>
        <input type='password' className='inputlogin' placeholder='password' onChange={passwordhandler}/><br/>
        <button type='submit' className='loginbut'>Register</button>
      </form>
    </div>
    <div><img src={loginimg} className = 'imagediv'></img></div>

    </div>
    </div>
  )
}
