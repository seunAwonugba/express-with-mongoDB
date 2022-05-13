const express = require("express");
const router = express.Router();
const {
    createData,
    getAllData,
    getDataById,
    updateData,
    deleteData,
} = require("../controllers/controller");

router.post("/practice", createData);

router.get("/practice", getAllData);
router.get("/practice/:id", getDataById);

router.patch("/practice/:id", updateData);

router.delete("/practice/:id", deleteData);

module.exports = router;
