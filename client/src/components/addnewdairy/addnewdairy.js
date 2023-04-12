import React, { useContext, useState } from 'react'
import './addnewdairy.css';
import { Diaryctx } from '../contex/mooddiaryctx';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function AddNewDairy() {
    const [date,setdate] = useState();
    const [dairyd,setdairy] = useState();
    const ctx  = useContext(Diaryctx);
    const navigator = useNavigate();
    const datehandler = (e)=>{
        setdate(e.target.value);
    }
    const dairyhandler = (e)=>{
        setdairy(e.target.value);
    }
    const dairypost = async ()=>{
        try{
        await axios.post(process.env.REACT_APP_API+"/mooddairy/dairy/addnewdairy",{
            email:ctx.logintocken.email,
            date:date,
            dairydata:dairyd
        })
    }
    catch(err){
        console.log(err);
    }
    }
    const submithandler = (e)=>{
        dairypost();
        e.preventDefault();
        const diary1 = {
            date:date,
            dairydata:dairyd
        }      
        ctx.setdiary([...ctx.diary,diary1]);
        navigator('/user');
    }
  return (
    <div className='addnewdairyouter' >
        <div className='addnewdairydiv'>
            <form onSubmit={submithandler}>
                <label>The Day is :</label>
                <input type='date' onChange={datehandler}></input>
                <br/>
                <h4>how you feel  :</h4>
                <br/>
                <textarea className='dairyinput' onChange={dairyhandler}></textarea>
                <br/>
                <button className='dairyinputbt'>Submit</button>
            </form>
        </div>
    </div>
  )
}
