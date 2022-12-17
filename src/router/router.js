const express = require("express")
const router = express.Router()

//------------------------- Models import -----------------//
const userController = require('../controller/userController')
const bookController = require('../controller/bookController')
const revewController = require('../controller/reviewController')
const awsController = require("../controller/awsController")

//------------------------- MiddleWare for Authentication and Auhorisation import  ----------------------------//
const {authentication, authorisation} = require('../middleware/middleware')


//-----------------------*** User API's ***----------------------------------------------------//
router.post("/register" , userController.createUser)

router.post("/login",userController.loginUser)

router.post("/write-file-aws", awsController.awsImage)

//-----------------------*** Book API's ***----------------------------------------------------//
router.post("/books" ,authentication , bookController.createBook)

router.get("/books" ,authentication ,bookController.getBooks)

router.get("/books/:bookId" ,authentication , bookController.getBooksById)

router.put("/books/:bookId" , authentication, authorisation, bookController.updateBookById)

router.delete("/books/:bookId", authentication , authorisation , bookController.deleteBookById)


//-----------------------*** Review API's ***----------------------------------------------------//
router.post("/books/:bookId/review" , revewController.postReview )

router.put("/books/:bookId/review/:reviewId" , revewController.updateReview )

router.delete("/books/:bookId/review/:reviewId", revewController.deleteReview )


router.all("/*", (req,res)=>{return res.status(400).send({status:false, message:"Url invaild(Path not found) "})})



module.exports = router