const express = require("express");
const cors = require("cors");
require("./db/conn")

const studentRouter = require("./featurerouter.js/studentrouter");
const teacherRouter = require("./featurerouter.js/teacherrouter");
const coursesRouter = require("./featurerouter.js/coursesrouter");
const uploadApi = require("./featurerouter.js/imageupload");
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
