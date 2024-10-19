const http = require("http")
const fs = require("fs")
const util = require("util")
const asyncread = util.promisify(fs.readFile)

const start = async()=>{

    try{
   const htmlwrite = await asyncread('index.html',"utf8")
   const csswrite = await asyncread('style.css',"utf8")
const myserver = http.createServer((req,res)=>{
   if(req.url === "/"){
    res.writeHead(200,{'content-type':'text/html'})
    res.write(`${htmlwrite}`)
    res.end()
   }
   else if(req.url === "/style.css"){
    res.writeHead(200,{'content-type':'text/css'})
    res.write(`${csswrite}`)
    res.end()
   }
   else{
    res.writeHead(400,{'content-type':'text/plain'})
    res.write("404 page not found")
    res.end()
   }
    
}
)
myserver.listen(3000)
}  
catch(error){
    console.log(error)
}
}
start()
