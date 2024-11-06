const express = require('express')
const app = express()
let { people } = require("./data")
const path = require("path") // Import the path module

// Serve static files from the "newdep" directory
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Handle the GET request at root
app.get("/", (req, res) => {
   
   res.sendFile(path.join(__dirname, 'form.html')) 
})

// Handle the POST request at "/login"
app.post("/login", (req, res) => {
   const {name} = req.body
   if(name){
      res.status(200).send(`hello ${name}`)
   }
   else{
      res.status(401).send("please provide credentials")
   }
})

// API route to get people data
app.get("/api/people", (req, res) => {
    res.status(200).json({ status: true, data: people })
})

// Start the server
app.listen(3000, () => {
    console.log("The server has started on port 3000")
})