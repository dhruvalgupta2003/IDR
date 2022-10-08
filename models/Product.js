const mongoose = require("mongoose")
// const {boolean} =require("webidl-conversions");
const ProductSchema = new mongoose.Schema(
    {   
        title : {type : String , required:true , unique:true},
        img : {type:String , required:true },
        img1 : {type:String , required:true },
        img2: {type:String , required:true },
        img3: {type:String , required:true },
        features : {type:String },
        features1 : {type:String},
        features2 : {type:String },
        features3 : {type:String },
        features4 : {type:String},
        features5 : {type:String},
        features6 : {type:String},
        features7 : {type:String},
        features8 : {type:String},
        features9 : {type:String}

    },{timestamps:false}
)
module.exports = mongoose.model("Product",ProductSchema);