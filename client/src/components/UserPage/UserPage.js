import React, { useContext, useEffect, useState } from 'react'
import { Diaryctx } from '../contex/mooddiaryctx';
import './UserPage.css'
import Diary from './diary';
import UserList from './userlist';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function () {

  const navigate = useNavigate();

  const logout = ()=>{
    localStorage.removeItem("tocken");
    navigate("/");

  }
  const fechdairy = async ()=>{
    
    console.log("hello");
    await axios.post(process.env.REACT_APP_API+"/mooddairy/dairy/getdiary",{
      email:ctx.logintocken.email
    })
    .then((responce)=>{
      console.log(responce);
      ctx.setdiary(responce.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  
    const ctx = useContext(Diaryctx);
   useEffect(
    ()=>{fechdairy();},[])
   
  return (
    <div>
        <header className='login_header'>MOOD DAIRY 
        <button className='logoutBt' onClick={logout}>Logout</button></header>
        <div className='user'>
           <div className='diarylist'><UserList/></div>
           <div className='diary'><Diary></Diary></div>
        </div>
    </div>
  )
}
