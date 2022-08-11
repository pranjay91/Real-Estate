const mongoose= require("mongoose");
const userSignin=new mongoose.schema({
    userId:{type:String,required:true},
    password:{type:String,required:true},
    ConfirmPassword:{type:String,required:true}
})
const user=mongoose.model("userSignin",userSignin)
module.exports=user;

