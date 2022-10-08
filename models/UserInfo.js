const mongoose = require("mongoose")
// const {boolean} =require("webidl-conversions");
const UserSchema = new mongoose.Schema(
    {
        first_name : {type : String , required:true , unique:true},
        
        last_name:{
            type: Date,
            
        },
        email:{
            type: String,
       
        },
        phone_number:{
            type: Number,
            // required: true
        },
        gender:{
            type: String,
  
        },
        nationality:{
            type: String,
            // required : true
        },
        category:{
            type: String,
            // required: true
        },
        state:{
            type: String,
            
        },
        income:{
            type: Number,
            
        },
        qualification:{
            type: String
        },
        marks_tenth:{
            type: String
        },
        marks_twelfth:{
            type: String
        }
        


    },{timestamps:true}
)
module.exports = mongoose.model("UserInfo",UserSchema);