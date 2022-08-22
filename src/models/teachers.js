const mongoose = require("mongoose");
const validator = require("validator");

const teacherSchema = new mongoose.Schema({
    teacherName:{
        type:String,
        required:true,
        minlength:3
    },
    teacherEmail:{
        type:String,
        required:true,
    },
    teacherMobile:{
        type:Number,
        required:true,
        minlength:10,
        maxlength:10
    },
    teacherAddress:{
        type:String,
        required:true
    },
    teacherQualification:{
        type:String,
        required:true
    },
    teacherSpeciality:{
        type:String,
        required:true
    },
    teacherLocationName:{
        type:String,
        required:true
    },
    teacherPhoto:{
        type:String,
        required:true
    },
    teacherLat:{
        type:String,
        required:true
    },
    teacherLong:{
        type:String,
        required:true
    }
})


const Teacher = new mongoose.model('Teacher',teacherSchema);
module.exports = Teacher;