const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        required:true,
        minlength:10
    },
    address:{
        type:String,
        required:true
    }
})


const Student = new mongoose.model('Student',studentSchema);
module.exports = Student;