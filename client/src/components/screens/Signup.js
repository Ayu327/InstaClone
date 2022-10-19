import React, { useState } from "react";
import { Link } from "react-router-dom";
import M from 'materialize-css'
import { useNavigate } from 'react-router-dom';




const Signup = ()=>{
   
   const navigate = useNavigate();
   const[name,setName] = useState("");
   const[email,setEmail] = useState("");
   const[password,setPassword] = useState("");
   const PostData = ()=>{
      if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
       M.toast({html: "invalid Email",classes:"#be0025 red accent-3"})
       return 
      }
      fetch("/signup",{
         method :"post",
         headers :{
            "Content-Type":"application/json"
         },
         body:JSON.stringify({
            name,
            password,
            email
         })
      }).then(res=>res.json())
      .then(data=>{
        if(data.error){
            M.toast({html: data.error,classes:"#be0025 red accent-3"})
        }
        else{
         M.toast({html:data.message,classes:"#00b85e green accent-3"})
         navigate('/signin');
      
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
       placeholder="name"
       value={name}
       onChange={(e)=>setName(e.target.value)}
       />
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
       
       <button className="btn waves-effect waves-light ##095da2 blue lighten-1" onClick={()=>PostData()} >SignUp
         
            </button>
       <h5>
        <Link to="/signin">Already have an account?</Link>
       </h5>
      </div>
   </div>
   </> 
)
}
export default Signup