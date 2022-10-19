import React from "react";

const Profile = ()=>{
return(
   <>
  <div style={{maxWidth : "1050px", margin : "0px auto"}}>
   <div style={{
      display:"flex",
      justifyContent:"space-evenly",
      margin : "10px ",
     
      borderBottom : "1px solid grey"
      
   }}>
      <div>
         <img style={{width : "160px",heighyt:"160px",borderRadius:"80px"}}
         src="https://images.unsplash.com/photo-1541534401786-2077eed87a74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
         ></img>
      </div>
      <div >
         <h4>Ayushi Saini</h4>
         <div style={{display:"flex",justifyContent:"space-between" , width:"108%"}}>
            <h6>40 posts</h6>
            <h6>40 followers</h6>
            <h6>40 following</h6>
         </div>
      </div>
   </div>
   <div className="gallery">
      <img className="item"src="https://images.unsplash.com/photo-1541534401786-2077eed87a74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"/>
      <img className="item"src="https://images.unsplash.com/photo-1606324670038-a8fbe00cd87d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGZhc2hpb258ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
      <img className="item"src="https://images.unsplash.com/photo-1558897796-185b06fc450a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGZhc2hpb258ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
      <img className="item"src="https://images.unsplash.com/photo-1541534401786-2077eed87a74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"/>
      <img className="item"src="https://images.unsplash.com/photo-1589988576838-0676b2ff398e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGZhc2hpb258ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
      <img className="item"src="https://images.unsplash.com/photo-1592455390682-a986306cacbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGZhc2hpb258ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
      
   </div>
  </div>
   </> 
)
}
export default Profile