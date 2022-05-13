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
//format mongoose.model("model_name", schema)
//import model inside controller
module.exports = mongoose.model("Data", projectSchema);
