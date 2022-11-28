const mongoose = require('mongoose')
const objectId = mongoose.Types.ObjectId

const blogSchema = new mongoose.Schema({

    title: {
        type : String ,
        required : true ,
        unique : true
    } ,

    excerpt:{
        type : String ,
        required : true
    },
    userId:{
        type : objectId ,
        required : true ,
        ref : "user"
    },
    ISBN : {
        type : String ,
        required : true ,
        unique : true
    },
    category:{
        type : String ,
        required : true
    },
    subcategory :{
        type : [String] ,
        required : true
    },
    reviews : {type : Number , default : 0} ,
    deletedAt : {
        type : Date,
        default : null
    } ,
    isDeleted:{type : Boolean , default : false} ,
    releasedAt:{
        type : String,
        required : true 
    }


} , { timestamps : true })



module.exports = mongoose.model("book" , blogSchema )