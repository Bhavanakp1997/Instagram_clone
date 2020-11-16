const Comment = require('../models/comment')
const Post = require('../models/post')
const commentCltr={}

commentCltr.create= async(req,res)=>{
    console.log("req user", req.user)
    const id= req.params.id
    const data=await Post.findOne({_id:id})
    const body=req.body
    const comment= new Comment(body)

    comment.userId = req.user._id
    console.log('userdata',req.user._id)
    console.log('comment', comment.userId)
    comment.postId=data._id
    console.log('data', data._id)
    console.log('postId',comment.postId)
    await comment.save()
    .then((cmt)=>{
     //console.log('response',cmt)
    })
    .catch((err)=>{
        res.json(err)
    })
    data.comments.push(comment._id)

    await data.save()
    .then((data)=>{
        res.json(data)
       //onsole.log('dataresponse', data)
    })
}

//list all the comments
commentCltr.list=(req,res)=>{
    Comment.find()
    .then((cmt)=>{
        res.json(cmt)
    })
    .catch((err)=>{
        res.json(err)
    })
}



module.exports=commentCltr