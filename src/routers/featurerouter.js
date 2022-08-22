const express = require("express");
const { model } = require("mongoose");
const router = new express.Router();

const Feature = require("../models/features");



router.post("/feature",(req,res) =>{
    const feature = new Feature(req.body);
    courses.save().then(()=>{
        res.status(201).send(feature);
    }
    ).then((e)=>
    {
        res.status(201).send(e);
    }) 
})

router.get("/feature",async (req,res) => {
    try{
    const name = req.params.name;
    //console.log(name);
    const featureData = await Feature.find();
    console.log(featureData);
    res.send(featureData);
    }catch(e){
    res.send(e);
    }
})


module.exports = router;