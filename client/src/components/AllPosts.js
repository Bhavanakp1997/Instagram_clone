import React from 'react'
import {connect} from 'react-redux'
import {startGetAllPosts} from '../actions/postAction'
//import AddPost from './AddPosts'
import {Link} from 'react-router-dom'
import {Accordion, Card, Button} from 'react-bootstrap'
import moment from 'moment'
import {startGetComment} from '../actions/commentAction'


class AllPost extends React.Component{
   componentDidMount(){
        this.props.dispatch(startGetAllPosts())
        this.props.dispatch(startGetComment())
    }
    AddPost=()=>{
      this.props.history.push('/createpost')
    }

      AddComment=(id)=>{
        this.props.history.push(`/comment/${id}`)
    }
   

   render(){
     console.log("result",this.props.comment)
     console.log('posts',this.props.posts)
   
     return(
       <div>
      
      <button className="btn waves-effect waves-light #64b5f6 blue lighten-2 " onClick={()=>{this.AddPost()}}> Add Post</button>
      {
        this.props.posts.map(ele=>{
        
          return(
            <div className="center">
            {/*<div className="card auth-card"  ><h1>Title:{ele.title} </h1> <h1>Caption:{ele.body}</h1> <h1>postedOn:{ele.createdAt}</h1></div>*/}
        
          <h6>postedOn:{ele.createdAt}</h6><br/>
           
          <div className="home">
          <div className="card home-card"> 
          <div className="card-image">     
         <img  className="center" src={ `http://localhost:3050/${ele.photo}`} /><br/>

          <h1>Title:{ele.title}</h1><br/> <h1>Caption:{ele.body}</h1><br/>
         </div>
         </div>
         </div>
         
         
                <div>
                <Accordion defaultActiveKey="1">
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Comment 
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                {
                                  ele.comments.map(element=>{
                                      return(
                                        <div className="card">
                                        <div className="card-body">
                                            <div>{element.body}</div>
                                            
                                        <small><p className="card-text">{moment(element.createdAt).subtract(10, 'days').calendar()}</p></small>{" "}{" "}<div>{ele.username}</div>
                                        </div>
                                       
                                    </div>  
                                      )
                                     
                                })
        }
                                
                                <button className="btn btn-primary" onClick={()=>{this.AddComment(ele._id)}}>Add Comment</button>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                </div>
            </div>
            
          
          
         
          )
        })
      }
</div>
      
      
     )
    
  
   
}

   }

const mapStateToProps=(state)=>{
 return{
   posts:state.posts,
   user:state.user,
   comment:state.comment
 }
}

export default connect(mapStateToProps)(AllPost)

