const express = require("express");
const cors = require("cors");
require("./db/conn")

const studentRouter = require("./routers/studentrouter");
const teacherRouter = require("./routers/teacherrouter");
const coursesRouter = require("./routers/coursesrouter");
const uploadApi = require("./routers/imageupload");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(studentRouter);
app.use(teacherRouter);
app.use(uploadApi);
app.use(coursesRouter);
app.use(cors());


app.listen(port,() => {
  console.log(`Connection is setup at ${port}`);
}
)
