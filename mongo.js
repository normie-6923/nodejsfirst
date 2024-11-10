const express = require("express")
const app = express()
const users = require("./user.json")
const fs = require("fs")
const mongoose = require("mongoose")


app.get("/users",async(req,res)=>{
    alldbusers = await User.find({})
    const html = `
    <ul>
         ${alldbusers.map((user)=>`<li>${user.firstName}-${user.email}`).join("")}
    </ul>
    
    `
    res.send(html)
})
//connection
mongoose.connect('mongodb://127.0.0.1:27017/youtube-app-1')
.then(()=> console.log('mongoDb connected'))
.catch(err => console.log("mongo Err",err))

app.use(express.json())
app.use(express.urlencoded({extended:false}))

//schema
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName: {
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    jobTitle:{
            type:String
    },
    gender:{
        type:String
    }

})
const User = mongoose.model('user',userSchema)

app.get("/api/user",(req,res)=>{
   
    res.send(users)
})

app.post("/api/user",async(req,res)=>{
    const body = req.body
  try{const result =  await User.create({
    firstName: body.firstName,
    lastName: body.lastName,
        email : body.email,
        jobTitle: body.job,
        gender: body.gender

    })
    console.log("result",result)
    return res.status(201).json({message:"success"})
}catch(err){
    console.error("error creating user:",err)
}
})
app.listen(3000,()=>{
    console.log("server has started")
})