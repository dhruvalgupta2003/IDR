// const { Router } = require('express');
const Image = require("../models/Images");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');

const router = require('express').Router();


// CREATE images
router.post("/",verifyTokenAndAdmin,async(req,res)=>{
     const newImage = new Image(req.body)

     try{
        const savedImage = await newImage.save();
        res.status(200).json(savedImage)

     }catch(err){
        res.status(500).json(err);
        console.log(err)
     }
})

// UPDATE

router.put("/:id",verifyTokenAndAdmin, async(req,res)=>{
    
    try{
        const updatedImage = await Image.findByIdAndUpdate(req.params.id, {
            $set:req.body,
        },{new:true});
        res.status(200).json(updatedImage); 
    }catch(err){
        res.status(500).json(err);
        console.log(err);
    }
})


//DELETE

router.delete("/:id",verifyTokenAndAdmin,async(req,res)=>{
    try{
        await Image.findByIdAndDelete(req.params.id)
        res.status(200).json("images has been deleted");
    }catch(err){
        res.status(500).json(err);
    }
})

//GET images

router.get("/find/:id",async(req,res)=>{
    try{
        const image = await Image.findById(req.params.id)
        // const {password , ...others} = user._doc;
        res.status(200).json(image);
    }catch(err){
        res.status(500).json(err);
        console.log(err)
    }
})

// GET ALL USER 


router.get("/",async(req,res)=>{
    try{
        const img = await Image.find();
        
        res.status(200).json(img);
    }catch(err){
        res.status(500).json(err);
        console.log(err)
    }
})


router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
        let images;
        if(qNew){
            images = await images.find().sort({createdAt:-1}).limit(5)
        }else if(qCategory){
            images = await images.find({categories:{
                $in :[qCategory]
            }})
        }else{
            images = await images.find()
        }



      res.status(200).json(images);
    } catch (err) {
      res.status(500).json(err);
      console.log(err)
    }
});


// GET USER STATS


// router.get("/stats",verifyTokenAndAdmin,async(req,res)=>{
//     const date = new Date();
//     const lastYear = new Date(date.setFullYear(date.getFullYear()-1));

//     try{
//         const data = await User.aggregate([
//             {$match:{createdAt:{$gte:lastYear}}},
//             {
//                 $project:{
//                     month:{$month:"$createdAt"}
//                 }
//             },
//             {
//                 $group:{
//                     _id:"$month",
//                     total:{$sum:1}
//                 }
//             }
//         ]);
//         res.status(200).json(data)
//     }catch(err){
//         res.status(500).json(err);
//     }


// })

router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  
    try {
      const data = await User.aggregate([
        { $match: { createdAt: { $gte: lastYear } } },
        {
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ]);
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json(err);
    }
  });




module.exports = router