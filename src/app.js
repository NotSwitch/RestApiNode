const express = require("express");
const cors = require("cors");
require("./db/conn")

//const studentRouter = require("./routers/studentrouter");
const teacherRouter = require("./routers/teacherrouter");
const coursesRouter = require("./routers/coursesrouter");
const uploadApi = require("./routers/imageupload");
const app = express();
const port = process.env.PORT || 8000;

app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers",
             "Origin, X-Requested-With,Content-Type,Accept,Authorization");
  res.header('Access-Control-Allow-Methods','GET,PUT,PATCH,POST,DELETE,OPTIONS');
  next();           
})
app.use(express.json());
//app.use(studentRouter);
app.use(teacherRouter);
app.use(uploadApi);
app.use(coursesRouter);
app.use(cors());


app.listen(port,() => {
  console.log(`Connection is setup at ${port}`);
}
)
