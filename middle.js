const express = require("express")
const app = express()
const logger = require("./logger")
const authorize = require("./authorize")


app.use([logger,authorize])

app.get('/',(req,res)=>{
    res.write(`hello mr ${req.user.name}`)
    res.end()
})
app.get('/about',(req,res)=>{
   res.send("this is about page")
})
app.get('/product',(req,res)=>{
   res.send("this is about page")
})
app.get('/more',(req,res)=>{
   res.send("this is about page")
})
app.listen(3000,()=>{
    console.log("the server has started")
})