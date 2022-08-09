const express = require("express")
const listModel = require("../models/list")
const router = express.Router()
const jwt = require("jsonwebtoken")

// router.get("/list", (req, res)=> {
//     try{
//         const username = jwt.verify(req.headers.authorization,process.env.SECRET_KEY)
//         listModel.find({username:username}).then((listData)=> {
//             res.status(200).send(listData); 
//     }).catch((err)=>{
//         res.status(400).send(err)
//     })
// }catch(err){
//     res.status(403).send("User Not Authorized", err)
// }
// });

router.get("/list",(req,res)=>{
    listModel.find({}).then((listData)=>{
    res.status(200).send(listData)
     //console.log(listData)
})
})

router.get("/",(req,res)=>{
res.status(200).send("working")
})


router.post("/add",(req,res)=>{
listModel.create(req.body).then((data)=> {
    res.status(200).send(data)
}).catch((err)=>{
    res.status(400).send(err)
})
})

module.exports = router;




