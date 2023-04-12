import React, { useContext } from 'react';
import './userlistcard.css'
import { Diaryctx } from '../contex/mooddiaryctx';

export default function UserListCard(props) {
  const ctx = useContext(Diaryctx);
  const seldate = ()=>{
    ctx.setdisplayeddiary(props);
  }
  console.log(ctx.displayeddiary);
  return (
    <div><button className='usercardbt' onClick={seldate}>{props.date}</button></div>
  )
}
