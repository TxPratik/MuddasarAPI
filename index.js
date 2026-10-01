let express=require('express')
let app=express();
let members=require("./Model/members")
app.get("/members",async(req,res)=>{
    let member=await members.find();
res.status(200).json({"members":member})

})
app.listen(1000)