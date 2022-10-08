const mongoose = require("mongoose")
// const {boolean} =require("webidl-conversions");
const ImageSchema = new mongoose.Schema(
    {
        
        img : {type:String , required:true },
       
        

    },{timestamps:false}
)
module.exports = mongoose.model("Image",ImageSchema);