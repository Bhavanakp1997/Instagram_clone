const mongoose=require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
   title:{
        type:String,
        required:true
    },
    body:{ 
        type:String,
        required:true
    },
    photo:{
        type:String,
        //default:"no pic"
    },
    postedBy:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    comments:[{
        type:Schema.Types.ObjectId,
        ref:'Comment'
    }]
}, {timestamps:true})

const Post=mongoose.model('Post', postSchema)

module.exports=Post