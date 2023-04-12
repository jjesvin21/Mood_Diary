import React, { useContext, useState } from 'react'
import './userlist.css'
import UserListCard from './userlistcard';
import { useNavigate } from 'react-router-dom';
import { Diaryctx } from '../contex/mooddiaryctx';

export default function UserList() {
    const navigate = useNavigate();
    const ctx = useContext(Diaryctx);
    const [datesearch,setdatesearch] = useState();

    const datehandler = (e)=>{
        setdatesearch(e.target.value);
    }

    const search = (e)=>{
        e.preventDefault()
        var flag =0;
        for(var i=0;i<ctx.diary.length;i++)
        {
            if(ctx.diary[i].date === datesearch)
            {
                ctx.setdisplayeddiary({
                    date:ctx.diary[i].date,
                    data:ctx.diary[i].dairydata
                });
                console.log(ctx.diary[i]);
                flag=1;
                break
                
            }
            if(flag === 0)
            {
                ctx.setdisplayeddiary({
                    date:"No Entery Found ",
                    data:"No Entery Found"
                });
            }
        }


    }
    
  return (
    <div>
        <button className='addnew' onClick = { ()=>{navigate('/newdairy')}}> add</button>
        <form onSubmit={search}>
            <div className='sform'>
            <input type='date' className='sdate' onChange={datehandler}></input>
            <button className='sbuttion' >search</button>

           
            </div>
        </form>
        <div className='datelist'>
        {
                ctx.diary.map((item)=>{
                    return(<UserListCard date = {item.date} data = {item.dairydata}></UserListCard>);
                })
            }
        </div>
    </div>
  )
}
