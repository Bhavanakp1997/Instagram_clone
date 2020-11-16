const express=require('express')
const app=express()
const configureDB=require('./config/database')
configureDB()
const router=require('./config/routes')
const cors =require('cors')
const port=3050


app.use(cors())
//in order to upload pic
app.use('/uploads',express.static('uploads'))

app.use(express.json())
app.use(router)

app.listen(port,()=>{
    console.log('listening to port', port)
})