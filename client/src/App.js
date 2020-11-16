import React from 'react'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import Navbar from './components/Navbar'
import "./App.css" 
//import {startUserLogout} from './actions/userAction'

import Home from './components/static/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Profile from './components/auth/Profile'

import AllPost from './components/AllPosts'
import MyPost from './components/MyPost'

import AddPost from './components/AddPosts'
import AddComments from './components/AddComments'
import ShowComment from './components/ShowComment'
//import Post 



function App(props){
  // console.log('u1', props.user)
 {/*const handleLogout = ()=>{
        localStorage.removeItem('authToken')
        window.location.href="/"
    }*/}

    return(
        <BrowserRouter>
        <div>
         {/*<h2>Instagram</h2>*/}
         {/*<Link to="/">Home</Link>*/}
         <Navbar/>
        {
          Object.keys(props.user).length!==0 ?(
            <div>
             { /* <Link to="/account">Account</Link>-*/}
             {/*<Link to="/users/post">Post</Link>*/}
          {/* <Link to="#" onClick={handleLogout}>Logout</Link>*/}
            </div>

          ):(
              <div>
              
              {/*<Link to="/users/register" >SignUp</Link>-
              <Link to="/users/login">SignIn</Link>*/}
            </div>
          )
            
          
        }
       
        <Switch>
          <Route path="/" component ={Home} exact ={true}/>
          <Route path="/users/register" component={Register}/>
          <Route path="/users/login" component={Login}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/users/post" component={AllPost}/>
          <Route path="/myposts" component={MyPost}/>
          <Route path="/createpost" component={AddPost}/>
          <Route path="/mypost/:id" component={MyPost}/>

          <Route path="/comment/:id" component={AddComments}/>
       {/*   <Route path="/users/post" component={AddComments}/>*/}
          <Route path="/showcomment/:id" component={ShowComment}/>

        </Switch>
        </div>
        </BrowserRouter>
    )
}

const mapStateToProps =(state)=>{
 return{
   user:state.user
 }
}

export default connect(mapStateToProps)(App)