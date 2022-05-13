const createData = (req, res) => {
    console.log(req.body);
    res.status(200).json({
        success: true,
        data: "create data and add to db",
    });
};

const getAllData = (req, res) => {
    console.log(res);
    res.status(200).json({
        success: true,
        data: "get all data from db",
    });
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
