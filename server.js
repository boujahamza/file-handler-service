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

app.post("/", upload.single("data"), (req, res, next) => {
    
    console.log("received file");
    console.log(JSON.parse(req.headers["user"]).user_id);

    res.status(200).send();
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});