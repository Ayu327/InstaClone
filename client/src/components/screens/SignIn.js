
import React, { useState ,useContext} from "react";
import {UserContext} from '../../App'
import { Link } from "react-router-dom";
import M from 'materialize-css'
import { useNavigate } from 'react-router-dom';


const SignIn = ()=>{
   const{state,dispatch} = useContext(UserContext)
   const navigate = useNavigate();
   const[email,setEmail] = useState("");
   const[password,setPassword] = useState("");
   const PostData = ()=>{
      if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
       M.toast({html: "invalid Email",classes:"#be0025 red accent-3"})
       return 
      }
      fetch("/signin",{
         method :"post",
         headers :{
            "Content-Type":"application/json"
         },
         body:JSON.stringify({
      
            password,
            email
         })
      }).then(res=>res.json())
      .then(data=>{
         console.log(data)
        if(data.error){
            M.toast({html: data.error,classes:"#be0025 red accent-3"})
        }
        else{
         localStorage.setItem("jwt",data.token)
         localStorage.setItem("user",JSON.stringify(data.user))
         dispatch({type:"USER",payload:data.user})
         M.toast({html:"signed in succesfully",classes:"#00b85e green accent-3"})
         navigate('/');
      
        }
        
      }).catch(err=>{
         console.log(err)
      })
   
   }
return(
   <>
   <div className="mycard">
   <div className="card auth-card input-field">
       <h2>Instagram</h2>
       <input
       type="text"
       placeholder="email"
       value={email}
       onChange={(e)=>setEmail(e.target.value)}
       />
       <input
       type="text"
       placeholder="password"
       value={password}
       onChange={(e)=>setPassword(e.target.value)}
       />
       <button className="btn waves-effect waves-light ##095da2 blue lighten-1" onClick={()=>PostData()}>Login
          
            </button>
            <h5>
        <Link to="/signup">Don't have an account?</Link>
       </h5>
      </div>
   </div>
   </> 
)
}
export default SignIn