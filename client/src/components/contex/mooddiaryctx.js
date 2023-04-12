import React,{createContext, useState} from 'react';

export const Diaryctx = createContext(
    {
        logintocken:null,
        setlogintocken:()=>{},
        diary:[],
        setdiary:()=>{},
        displayeddiary:null,
        setdisplayeddiary:()=>{}


    }
);

export const DiaryctxProvider = ({children})=>{

    const [logintocken,setlogintocken] = useState(JSON.parse(localStorage.getItem("tocken"))||null);
    const [diary,setdiary] = useState([]);
    const [displayeddiary,setdisplayeddiary] = useState({
        date:" ",
        data:"Select The Date"
    });
    
    return(<Diaryctx.Provider value={
        {
            logintocken:logintocken,
            setlogintocken:setlogintocken,
            diary:diary,
            setdiary:setdiary,
            displayeddiary:displayeddiary,
            setdisplayeddiary:setdisplayeddiary
        }

    }> 
    {children}
    </Diaryctx.Provider>)
    
}