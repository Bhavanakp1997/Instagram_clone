import React from 'react'
import {Link} from 'react-router-dom'
const NavBar=()=>{
const handleLogout = ()=>{
        localStorage.removeItem('authToken')
        window.location.href="/"
    }
    return (
<nav>
    <div className="nav-wrapper white">
      < Link to="/" className="brand-logo">Instagram</Link>
      <ul id="nav-mobile" className="right ">
        <li><Link to="/profile">Profile</Link></li>
         <li><Link to="/users/post">AllPost</Link></li>
        <li><Link to="/users/register">SignUp</Link></li>
        <li><Link to="/users/login">SignIn</Link></li>
         <li><Link to="/myposts">MyPost</Link></li>

         
        <li><Link to="#" onClick={handleLogout}>Logout</Link></li>
      </ul>
    </div>
  </nav>

    )
}

export default NavBar

