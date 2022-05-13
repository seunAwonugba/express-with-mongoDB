const Model = require("../model/model");

//since we are creating data, it simply means we want to save data to the DB
//the operation has to be asynchroneous
const createData = async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age,
    });

    //we call the .save() method to save data to db
    try {
        const dataToSve = await data.save();
        res.status(200).json({
            success: true,
            data: dataToSve,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            data: err.message,
        });
    }
};

//fetch all data from database using the .find() method
const getAllData = async (req, res) => {
    try {
        const dataToFetch = await Model.find();
        res.status(200).json({
            success: true,
            data: dataToFetch,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            data: "Resource not found",
        });
    }
};

//fetch data from database by ID
//step 1 get the id of an element which is called document here using req.params.id by using the .findById() method
const getDataById = async (req, res) => {
    try {
        const dataToFetchById = await Model.findById(req.params.id);
        res.status(200).json({
            success: true,
            data: dataToFetchById,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            data: "This ID does not exist in our DB",
        });
    }
};

//to update data, create a variable for the followiing in the try catch block
// 1. get the id req.params.id
// 2. get body of the data to update
// 3. create an options object and set the value of new to true
//Use the .findByIdAndUpdate() method to update a document in your DB
const updateData = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const options = {
            new: true, //this tells me to return the body of the update data
        };

        const dataToUpDate = await Model.findByIdAndUpdate(id, body, options);
        res.status(200).json({
            success: true,
            data: dataToUpDate,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            data: "This ID does not exist in our DB",
        });
    }
};

//to implementt delet1
//first, find the id
//then call the method .findByIdAndDelete()
const deleteData = async (req, res) => {
    try {
        const id = req.params.id;
        const dataToDelete = await Model.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            data: `${dataToDelete.name} has been deleted successfully`,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            data: "Id of this element does not exist in our database, so therefore we cannot complete this action",
        });
    }
};

module.exports = {
    createData,
    getAllData,
    getDataById,
    updateData,
    deleteData,
};
