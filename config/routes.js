const express=require('express')
const router=express.Router()
const usersController = require('../app/controllers/usersController')
const postsController = require('../app/controllers/postsController')
const commentCltr=require('../app/controllers/commentsController')

const {authenticateUser}=require('../app/middlewares/authentication')
const upload =require('../app/middlewares/uploadPic')


router.post('/users/register',usersController.register)
router.post('/users/login',usersController.login)
router.get('/users/account',authenticateUser,usersController.account)
router.post('/createpost',authenticateUser ,upload.single('photo'),postsController.create)
router.get('/listpost',authenticateUser, postsController.list)
router.get('/mypost',authenticateUser, postsController.show)
router.put('/mypost/:id',authenticateUser,postsController.update)
router.delete('/mypost/delete/:id',authenticateUser,postsController.delete)

//comment
router.post('/comment/:id', authenticateUser, commentCltr.create)
router.get('/usercomment', authenticateUser,commentCltr.list)


module.exports=router