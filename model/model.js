const mongoose = require("mongoose");

//first create a schema
const projectSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    age: {
        required: true,
        type: Number,
    },
});

//create/ convert schema to model, and export your model
module.exports = mongoose.model("Data", projectSchema);
