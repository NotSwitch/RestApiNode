const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://vishaltyagi007:VIsh!!21@cluster0.zpzkhll.mongodb.net/notSwitchDB",{useNewUrlParser: true,useUnifiedTopology: true}).then(() => console.log("Connect Successfully")).catch((err) => console.log(err));

/* mongodb://192.168.1.58:27017/students-api8  -- localhost connectionString */