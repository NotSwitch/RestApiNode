const mongoose = require("mongoose");
const validator = require("validator");

const coursesSchema = new mongoose.Schema({
    courseName:{
        type:String,
        required:true,
        minlength:3
    },
    courseDuration:{
        type:String,
        required:true,
    },
    coursePrice:{
        type:Number,
        required:true
    },
    teacherBetchTime:{
        type:String,
        required:true
    },
    courseTeacher:{
        type:String,
        required:true
    },
    coursePhoto:{
        type:String,
        required:true
    }
})


const Courses = new mongoose.model('Courses',coursesSchema);
module.exports = Courses;