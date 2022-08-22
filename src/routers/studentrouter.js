const express = require("express");
const router = new express.Router();
const Student = require("../models/students");


router.post("/students",(req,res) =>{
    const student = new Student(req.body);
    student.save().then(()=>{
        res.status(201).send(student);
    }
    ).then((e)=>
    {
        res.status(201).send(e);
    }) 
})

router.get("/students",async (req,res) => {
    try{
    const name = req.params.name;
    //console.log(name);
    const studentData = await Student.find();
    console.log(studentData);
    res.send(studentData);
    }catch(e){
    res.send(e);
    }
})

module.exports = router;