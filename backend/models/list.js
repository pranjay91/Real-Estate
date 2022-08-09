const mongoose = require("mongoose")

const listSchema = new mongoose.Schema({
    user_id:String,
    username:String,
    ppdId:String,
    image: String,
    property:String,
    contact:Number,
    area:Number  


})

const listModel = new mongoose.model("list",listSchema)

module.exports = listModel

