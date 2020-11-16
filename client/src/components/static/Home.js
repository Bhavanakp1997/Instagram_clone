import React from 'react'
import icon from './iconn.png'
import './home.css'
function Home(props){
    return(
        <div>
        <div className="text-center">
         <img src={icon} className="rounded" alt="not found"/>
         <h2>Welcome to Instagram</h2>
        </div>
        </div>
    )
}

export default Home