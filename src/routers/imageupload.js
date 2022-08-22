const express = require("express");
const app = express()
const multer = require("multer");
const path = require("path");
const router = new express.Router();

const storage = multer.diskStorage({
    destination:'./teacherImages/images',
    filename: (req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage:storage
    // limits:{
    //     fileSize:1000000
    // }
})
function errorHander(err,req,res,next){
    if(err instanceof multer.MulterError){
        res.json({
            success:0,
            message:err.message
        })
    }

}

// router.use(errorHander);
router.use('/profile',express.static('teacherImages/images'));
router.post("/upload",upload.single('profile'),(req,res) =>{
    console.log(req.file);
   res.json({
    success:1,
    profileUrl:`http://localhost:8000/profile/${req.file.filename}`
   })
})

module.exports = router;
