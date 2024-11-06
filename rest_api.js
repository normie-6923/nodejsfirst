const express = require('express')
const app = express()
// const path = require('path')
const users = require('./user.json')
const fs = require('fs')

app.use(express.urlencoded({extended:false}))

app.get('/users',(req,res)=>{
    const html = `
    <ul>
    ${users.map(user=>`<li>${user.first_name}.</li>`).join("")}
    
    </ul>`
    res.setHeader("Name","anurag singh")
    console.log(req.headers)
    res.send(html)
})

app.get('/api/users',(req,res)=>{
   const allproducts = users.map((allusers)=>{
    const {id,first_name,email} = allusers
    return {id,first_name,email}
   })
   res.json(allproducts)
})

app
   .route('/api/users/:Id').get((req,res)=>{
    const {Id} = req.params
    const singleproduct = users.filter(user=>user.id===Number(Id))
    if(!singleproduct){
res.status(401).send(`<h1>we are unable to find this file</h1>`)
    }

   return res.json(singleproduct)

}).patch((req,res)=>{
   return res.json({status:"pending"})

}).delete((req,res)=>{
   const {Id} = req.params
   const deletingel = users.findIndex(user=>user.id===Number(Id))
   if(deletingel ===-1){
    return res.send("user not found")
   }
   users.splice(deletingel,1)

   fs.writeFile('user.json',JSON.stringify(users,null,2),(err,data)=>{
    if(err){
        res.status(500).send('error')
    }
    return res.json({delete:"success", id:`${Id}`})
   })

})




app.get('/api/query',(req,res)=>{
    const {search,limit} = req.query
    let searchedproduct = [...users] 

    if(search){
        searchedproduct = searchedproduct.filter(user=>
            user.first_name.startsWith(search.toUpperCase()))
        }
    if(limit){
      searchedproduct = searchedproduct.slice(0,Number(limit))
    }

    res.json(searchedproduct)
})


app.post('/api/users',(req,res)=>{
    const body = req.body
    users.push({...body,id:users.length+1})
    fs.writeFile('user.json',JSON.stringify(users,null,2),(err,data)=>{
        console.log(`id:${users.length}`)
        return res.json({status:"success",id:`${users.length}`})
    })
})



app.listen(8000,()=>{
    console.log('the server has started')
})