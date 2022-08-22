const express = require("express");
const { model } = require("mongoose");
const router = new express.Router();

const Teacher = require("../models/teachers");



router.post("/teachers",(req,res) =>{
    const teacher = new Teacher(req.body);
    teacher.save().then(()=>{
        res.status(201).send(teacher);
    }
    ).then((e)=>
    {
        res.status(201).send(e);
    }) 
})

router.get("/teachers",async (req,res) => {
    try{
    const name = req.params.name;
    //console.log(name);
    const teacherData = await Teacher.find();
    console.log(teacherData);
    res.send(teacherData);
    }catch(e){
    res.send(e);
    }
})


module.exports = router;