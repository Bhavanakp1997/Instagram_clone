import React from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import {selectCommentUser} from '../selectors/selectCommentUser'
import {startGetComment} from '../actions/commentAction'
import {startGetAllPosts} from '../actions/postAction'
import {startGetAllUser} from '../actions/userAction'

class ShowComment extends React.Component{

    componentDidMount(){
        this.props.dispatch(startGetAllUser())
        this.props.dispatch(startGetComment())
        this.props.dispatch(startGetAllPosts())
    }

    

    allPost=()=>{
        this.props.history.push('/users/post')
    }

    render(){
        //console.log("show user", this.props.allUser)
        //console.log("show post", this.props.post?.comments)
        return(
            <div>
                
                {
                    this.props.posts?.comment.map(ele=>{
                        let names = selectCommentUser(this.props.allUser, ele.userId)
                        //console.log("names", names)
                        if(names){
                            return(
                            <div className="card border-secondary mb-3" style={{width:"18rem"}}>
                        <div className="card-body text-secondary">
                        <h5 className="card-title">@{names?.email}</h5>
                        <p className="card-text">{ele?.body}</p>
                        <p class="card-text">CreatedOn--{moment(ele.createdAt).subtract(10, 'days').calendar()}</p>
                        </div>
                        {
                           
                            console.log("commented user",ele) 
                        }
                        </div>
                            )
                        } 
                        
                })
            }
                
                <button type="button" className="btn btn-primary" onClick={this.allPost}>Back</button>
            </div>
        )
    }
}

const mapStateToProps = (state, props)=>{
    const id = props.match.params.id
    //console.log(id)
    return{
        user: state.user,
        posts: state.posts.find(ele=>ele._id === id),
        comment: state.comment,
        allUser: state.allUser
    }
}

export default connect(mapStateToProps)(ShowComment)
