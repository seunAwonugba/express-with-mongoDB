const Model = require("../model/model");

//since we are creating data, it simply means we want to save data to the DB
//the operation has to be asynchroneous
const createData = async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age,
    });

    console.log(req.body);

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

const getDataById = (req, res) => {
    console.log(req.params);
    res.status(200).json({
        success: true,
        data: "get data from db by id",
    });
};
const updateData = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.status(201).json({
        success: true,
        data: "update data on the db",
    });
};

const deleteData = (req, res) => {
    console.log(req.params);
    res.status(200).json({
        success: true,
        data: "delete data from db",
    });
};

module.exports = {
    createData,
    getAllData,
    getDataById,
    updateData,
    deleteData,
};
