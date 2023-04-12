import React, { useContext } from 'react'
import { Diaryctx } from '../contex/mooddiaryctx'

export default function Diary() {
  const ctx = useContext(Diaryctx);
  
   
  return (
    <div><h3>{ctx.displayeddiary.date}</h3>
    <p>{ctx.displayeddiary.data}</p></div>
  );
}
