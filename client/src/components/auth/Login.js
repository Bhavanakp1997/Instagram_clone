import React from 'react'
import {connect} from 'react-redux'
import {startLoginUser} from '../../actions/userAction'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:""
        }
    }
    
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            email:this.state.email,
            password:this.state.password
        }
        // console.log(formData)
         const redirect=()=>{
        return this.props.history.push('/users/post')
    }
        this.props.dispatch(startLoginUser(formData, redirect))
       // console.log(formData)
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    render(){
        return(
            <div className="mycard">
            <div className="card auth-card" >
              <h1>Instagram</h1>
              <form onSubmit={this.handleSubmit}>
              <label htmlFor="email" >Email</label>
              <input
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
              id="email"
              required/><br/>
 
             <label htmlFor="password">Password</label>
              <input
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              name="password"
              id="password"
              required/><br/>
            
             <button className="btn waves-effect waves-light #64b5f6 blue lighten-2 " >Login</button>
              </form>
            </div>
            </div>
        )
    }
}

export default connect()(Login)