const mongoose = require("mongoose");
// mongoose.connect("mongodb+srv://vishaltyagi007:UFVinjGQnvI3I3aN@cluster0.zpzkhll.mongodb.net/test",{useNewUrlParser: true,useUnifiedTopology: true}).then(() => console.log("Connect Successfully")).catch((err) => console.log(err));
mongoose.connect("mongodb+srv://vishaltyagi007:UFVinjGQnvI3I3aN@cluster0.zpzkhll.mongodb.net/notSwitchDB?retryWrites=true&w=majority",{useNewUrlParser: true,useUnifiedTopology: true}).then(() => console.log("Connect Successfully")).catch((err) => console.log(err));

/* mongodb://192.168.1.58:27017/students-api8  -- localhost connectionString */