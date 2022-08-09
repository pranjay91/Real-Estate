const express = require("express");
const mongoose = require("mongoose");
const listController = require("./routes/list")
const app = express();
require('dotenv').config();
const cors = require("cors");


app.listen(process.env.PORT || 3010, (err)=> {
if(!err) {
    console.log("Server started at port 3010")
} else {
    console.log(err);
}
});


//body parser middleware
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({extended: false}));
app.use(cors());


//Database 
mongoose.connect("mongodb://localhost/realEstate", (data)=> {
//mongoose.connect("mongodb+srv://pranjay:Pranjay9199@cluster0.mzmgp.mongodb.net/realEstateData?retryWrites=true&w=majority", (data)=> {
    console.log("Successfully connected to db");
}, (err)=> {
    console.log(err)
});

app.get("/", (req, res)=> {
    res.send("RealEstate Backend")
});

//middleware
app.use("/list" , listController)
