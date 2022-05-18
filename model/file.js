const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    name: {type: String, required: true},
    user_id: {type: String, required: true},
    username: {type: String, required: true},
});

module.exports = mongoose.model("file", fileSchema);