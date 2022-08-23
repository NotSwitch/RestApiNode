const mongoose = require("mongoose");

mongoose.connect("mongodb://192.168.1.58:27017/students-api",{useNewUrlParser: true,useUnifiedTopology: true}).then(() => console.log("Connect Successfully")).catch((err) => console.log(err));
