import React from 'react'
import {connect} from 'react-redux'
import {startGetMyPosts, startDeleteMyPost} from '../actions/mypostAction'


class myPost extends React.Component{
    componentDidMount(){
        this.props.dispatch(startGetMyPosts())
    }

    AddPost=()=>{
        this.props.history.push('/createnew')
    }

    editPost=(id)=>{
        this.props.history.push(`/editpost/${id}`)
    }

    deletePost=(id)=>{
        this.props.dispatch(startDeleteMyPost(id))
    }

    render(){
        return(
            <div>

                {
                    this.props.myposts.map(ele => {
                        return(
                            <div className="card w-75">
                                <div className="card-body">
                                <img className="center" src={`http://localhost:3050/${ele.photo}`} className="img-fluid" width="350" height="350" alt="not found"/><br/><br/>
                                    <h5 className="card-title">Title: {ele.title}</h5>
                                    <p className="card-body">{ele.body}</p>
                                    <div className="card-image">
                                    <br/>
                                    </div>
                                   <button className="btn btn-primary" onClick={()=>{this.editPost(ele._id)}}>Edit</button> <button className="btn btn-primary" onClick={()=>{this.deletePost(ele._id)}}>Delete</button>  
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    //console.log("my profile", state.mypost)
    return{
        myposts: state.myposts
    }
}

export default connect(mapStateToProps)(myPost)
/*import React from 'react'


class MyPost extends React.Component{
    render(){
        return(
            <div>
            <h2>My Posts Only</h2>
            

            </div>

        )
    }
}

export default MyPost*/