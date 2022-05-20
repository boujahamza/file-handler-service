require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const multer = require('multer');
const cors = require("cors");

const app = express();

app.use(cors());

port = process.env.PORT || 4001;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'files/');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + JSON.parse(req.headers["user"]).user_id;
      cb(null, file.fieldname + '-' + uniqueSuffix);
    }
  })
  
const upload = multer({storage: storage});

app.get("/", (req, res) => {
    console.log("recieved request");
});

app.get("/file/:userId", (req, res) => {
    console.log("recieved request");
});

const File = require("./model/file");

app.post("/", upload.single("data"), async (req, res, next) => {

    const user = JSON.parse(req.headers["user"]);

    const file = await File.create({
        name: req.file.filename,
        user_id: user.user_id,
        username: user.username
    })

    console.log("received file");
    console.log(req.headers["user"]);

    res.status(200).send();
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});