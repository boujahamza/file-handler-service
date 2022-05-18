const express = require("express");
const multer = require('multer');

var upload = multer();

const app = express();

port = process.env.PORT || 4001;

app.get("/", (req, res) => {
    console.log("recieved request");
});

app.post("/", upload.single("data"),(req, res) => {
    console.log("received file");
    console.log(req.file);
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});