const express = require("express");
const { model } = require("mongoose");
const router = new express.Router();

const Courses = require("../models/courses");



router.post("/courses",(req,res) =>{
    const courses = new Courses(req.body);
    courses.save().then(()=>{
        res.status(201).send(courses);
    }
    ).then((e)=>
    {
        res.status(201).send(e);
    }) 
})

router.get("/courses",async (req,res) => {
    try{
    const name = req.params.name;
    //console.log(name);
    const coursesData = await Courses.find();
    console.log(coursesData);
    res.send(coursesData);
    }catch(e){
    res.send(e);
    }
})


module.exports = router;