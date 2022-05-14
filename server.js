const express = require("express");

const app = express();

port = process.env.PORT || 4001;

app.get("/", (req, res) => {
    console.log("recieved request");
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})