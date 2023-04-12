
import React from 'react';
import './App.css';
import Home from './components/Home/home';
import Login from './components/Login_Register/Login';
import {Routes,Route} from "react-router-dom";
import Register from './components/Login_Register/Register';
import { DiaryctxProvider } from './components/contex/mooddiaryctx';
import UserPage from './components/UserPage/UserPage';
import AddNewDairy from './components/addnewdairy/addnewdairy';


function App() {
  return (
    <DiaryctxProvider>
    <div className="App">
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path ='/login' element = {<Login/>}/>
        <Route path='/register' element = {<Register/>}/>
        <Route path='/user' element = {<UserPage/>}/>
        <Route path='/newdairy' element ={<AddNewDairy/>}/>

      </Routes>
      
      
    
    </div>
    </DiaryctxProvider>
  );
}

export default App;
