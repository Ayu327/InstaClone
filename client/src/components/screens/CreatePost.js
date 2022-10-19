import React, { useState , useEffect} from "react";
import M from 'materialize-css'
import { useNavigate } from 'react-router-dom';

const CreatePost =()=>{
  const navigate = useNavigate();
  const[title,setTitle]=useState("")
  const[body,setBody]=useState("")
  const[image,setImage]=useState("")
  const[url,setUrl]=useState("")
  useEffect(()=>{
    if(url){
    fetch("/createpost",{
      method :"post",
      headers :{
         "Content-Type":"application/json",
         "Authorization":"Bearer "+localStorage.getItem("jwt")
      },
      body:JSON.stringify({
   
         title,
        body,
        pic:url
      })
   }).then(res=>res.json())
   .then(data=>{
     
     if(data.error){
         M.toast({html: data.error,classes:"#be0025 red accent-3"})
     }
     else{
      M.toast({html:"Created Post Successfully",classes:"#00b85e green accent-3"})
      navigate('/');
   
     }
     
   }).catch(err=>{
      console.log(err)
   })
  }
  },[url])


  const postDetails = ()=>{
    const data = new FormData()
    data.append("file",image)
    data.append("upload_preset","InstaClone")
    data.append("cloud_name","ayu327")
    fetch("https://api.cloudinary.com/v1_1/ayu327/image/upload",{
      method:"post",
      body:data
    })
    .then(res=>res.json())
    .then(data=>{
      setUrl(data.url)
    })
    .catch(err=>{
      console.log(err)
    })
   
    
  } 
return(
    <div className="card input-filed"
    style={{
        margin:"30px auto",
        maxWidth : "500px",
        padding :"20px",
        textAlign : "center"
    }}
    >
        <input type="text"
         placeholder="title"
         value={title}
         onChange={(e)=>setTitle(e.target.value)}
        />
        <input type="text"
         placeholder="body"
         value={body}
         onChange={(e)=>setBody(e.target.value)}
         />
        <div className="file-field input-field">
      <div className="btn ">
        <span>Upload Image</span>
        <input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text"/>
      </div>
    </div>
    <button className="btn waves-effect waves-light #095da2 blue lighten-1" onClick={()=>postDetails()}>Submit post</button>
    
    </div>
)
}
export default CreatePost