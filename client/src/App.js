// 👇️ default import
import React from "react";
import { useReducer } from "react";
import Navbar from "./components/Navbar";
import './App.css'
import { useNavigate } from "react-router-dom";
import {BrowserRouter, Route , Routes} from 'react-router-dom'
import Home from './components/screens/Home'
import { useEffect } from "react";
import { createContext } from "react";
import {reducer,initialState} from '../src/reducers/userReducer'

import Profile from "./components/screens/Profile";
import CreatePost from "./components/screens/CreatePost";
import SignIn from "./components/screens/SignIn";
import SignUp from "./components/screens/Signup";
import { useContext } from "react";






export const UserContext = createContext()


const Routing=()=>{

  const history = useNavigate()
  const{state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = localStorage.getItem("user")
    if(user){
      dispatch({type:"USER",payload:user})
     history('/');
    }else{
      history('/signin');
    }
  },[])
 
  return(
    <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/signin" element={<SignIn/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/signup" element={<SignUp/>} />
    <Route path="/create" element={<CreatePost/>}/>
    </Routes>
  )
}


export default function App() {
const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <UserContext.Provider value = {{state,dispatch}}>

    
   <BrowserRouter>
      <Navbar />
      <Routing/>
      
      
      </BrowserRouter>
      </UserContext.Provider>
  );
}
