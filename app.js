//express used for middleware to create various end points
const express = require("express");
const app = express();

//middle ware to accept data in JSON format
app.use(express.json());

//import router for our apis
const router = require("./routes/routes");

app.use("/api/v1", router);

const port = 8000;
const host = "localhost";

//mongose to manage data in mongoDB
const mongose = require("mongoose");

//import contents of .env file
require("dotenv").config();

//store the returned string into a variable
const mongoString = process.env.DATABASE_URL;

//next connect database to server
mongose.connect(mongoString);
const database = mongose.connection;

//add callbacks for success state and error state
database.on("error", (err) => {
    console.log(err);
});

database.once("connected", () => {
    console.log(`Database connected successfully...`);
});

app.all("*", (req, res) => {
    res.status(400).send("Resource not found at this time");
});

app.listen(port, host, () => {
    console.log(`Server is listening on port: http://${host}/${port}`);
});
