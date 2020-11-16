import React from 'react'

const Profile=()=>{
    return(
        <div>
           <div style={{
               display:"flex",
               justifyContent:"space-around",
               margin:"18px opx",
               height:"170px",
               borderBottom:"1px solid grey"
           }}>
                <div>
                      <img style={{width:"160px", height:"160px",borderRadius:"80px"}}
                       src="https://images.unsplash.com/photo-1579503841516-e0bd7fca5faa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                       />
                </div>
                <div>
                   <h2>Anne</h2>  
                   <div style={{display:"flex", justifyContent:"space-between", width:"108%"}}>
                      <h6>40 posts </h6>
                      <h6>40 followers </h6>
                      <h6>40 following </h6>
                   </div>
                </div>
              </div>
           </div>
    )
}

export default Profile
