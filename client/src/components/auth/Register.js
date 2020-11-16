import React from 'react'
import {connect} from 'react-redux'
import {startRegisterUser} from '../../actions/userAction'

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:"",
            email:"",
            password:""
        }                   
    }
    
    handleSubmit=(e)=>{
        e.preventDefault()   
        const formData={
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }  
        
       const redirect=()=>{
           return this.props.history.push('/users/login')
       }
        this.props.dispatch(startRegisterUser( formData, redirect))
console.log(formData)
    }
    

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        return(
            <div className="card auth-card">
              <h1> Instagram</h1>
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="username"> User Name </label>
                <input 
                type="text"
                value={this.state.username}
                onChange={this.handleChange}
                name="username"
                required
                //id="username"
               // placeholder="Enter Your Name"
                /><br/>

                <label htmlFor="email" > Email</label>
                <input type="email"
                value={this.state.email}
                onChange={this.handleChange}
                name="email"
                id="email"
                required
               // placeholder="Enter Your Email"
                /><br/>

                <label  htmlFor="password"> Password </label>
                <input type="password"
                value={this.state.password}
                onChange={this.handleChange}
                name="password"
                id="password"
                required

                //placeholder="Enter Your Password"
                /><br/>

               <button className="btn waves-effect waves-light #64b5f6 blue lighten-2 " >Register</button>
              </form>
            </div>
        )
    }
}
export default connect()(Register)