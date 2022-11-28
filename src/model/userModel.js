const mongoose = require('mongoose')
const objectId = mongoose.Types.ObjectId

const userSchema = new mongoose.Schema({

    // // ALL Keys
    title: {
        type: String, 
        enum:["Mr", "Mrs", "Miss"],
        required: true
    },
    name: { 
        type: String, 
        required : true

    },

    phone: {
        type : String , 
        required : true,
        unique:true,
    },
    email: {
        type : String , 
        required : true,
        unique:true,
    }, 
    password: {
        type : String , 
        required : true,
        unique:true,
    },
    address: {
      street: String,
      city: String,
      pincode: String
    }


} , { timestamps : true })



module.exports = mongoose.model("user" , userSchema )