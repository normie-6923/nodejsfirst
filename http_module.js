const http = require("http")
const fs = require("fs")
// const util = require("util")

// const asyncread = util.promisify(fs.createReadStream)

// const myserver = http.createServer((req,res)=>{
//     if(req.url === "/"){
//         res.writeHead(200,{'contentType':'text/plain'})
//         console.log("send back")
//         res.end("Hello world")
        
//     }
//     else if(req.url ==="/about"){
//         res.writeHead(200,{'contentType':'text/plain'})
//         res.end("this is my about page")
//     }
//     else{
//         res.writeHead(404,{'contentType':'text/plain'})
//         res.end("404 page not found")
//     }
// })

// const myserver = http.createServer((req,res)=>{
// const start = async()=>{
//     try{
//       const first = await asyncread("first.txt","utf8")
//       res.end(first)
//     }
//     catch(err){
//         console.log(err)
//     }

// }
// start()
// })
const myserver = http.createServer((req,res)=>{


const readableStream = fs.createReadStream("first.txt","utf8")
let chunkcount = 0

readableStream.on('data',(chunk)=>{
    chunkcount++
    console.log(chunkcount)
    res.end(chunk)
   
})
})



myserver.listen(3000,()=>{
    console.log("server is running")
}
)