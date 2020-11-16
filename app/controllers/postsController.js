const Post = require('../models/post')
const postsController ={}

postsController.create=(req,res)=>{
 const body=req.body

  const post=new Post(body)
  //user.role="user"
   console.log("the request body file", req.file.path)
     console.log("post",body)
     post.postedBy = req.user._id
     post.photo=req.file.path
    //post.photo=req.file.path
    //console.log(req)
     //console.log(req.file) we get it from multer folder
     post.save()
     .then((result)=>{
         res.json(result)
     })
     .catch((err)=>{
         res.json(err)
     })
}
/*
postControllers.create = (req,res)=>{
    const body = req.body
    const post = new Post(body)
    //console.log(JSON.stringify(req))
    console.log("req", req)
    console.log("req file", req.file)
    post.userId =  req.user._id
    post.photo = req.file.path
    post.save()
        .then((post)=>{
            res.json(post)
        })
        .catch((err)=>{
            res.json(err)
        })
}*/


postsController.list=(req,res)=>{
   Post.find()
   .populate("comments")
   /*}.populate("postedBy", "_id username")*/
     .then((post)=>{
         console.log(post)
         res.json(post)
     })
     .catch((err)=>{
         res.json(err)
     })
}

//to view the post of the own individual user
postsController.show=(req,res)=>{
    Post.find({postedBy:req.user._id})
    .populate("postedBy","_id username")
    .then((mypost)=>{
        //console.log('mypost', mypost)
        res.json({mypost})
    })
    .catch((err)=>{
        res.json(err)
    })
}

postsController.update = (req, res) => {
    const id = req.params.id 
    const body = req.body 
    Post.findByIdAndUpdate({user:req.user._id,_id:id},  {$set:body},{ new: true, runValidators: true })
        .then((posts) => {
            res.json(posts)
        })
        .catch((err) => {
            res.json(err)
        })
}

postsController.delete=(req,res)=>{
    const id=req.params.id
Post.findByIdAndDelete({_id:id})
      .then((post)=>{
          res.json(post)
      })
      .catch((err)=>{
          console.log(err)
      })

 }
    






 module.exports=postsController