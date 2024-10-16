const http = require("http")

const myserver = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.writeHead(200,{'contentType':'text/plain'})
        res.end("Hello world")
    }
    else if(req.url ==="/about"){
        res.writeHead(200,{'contentType':'text/plain'})
        res.end("this is my about page")
    }
    else{
        res.writeHead(404,{'contentType':'text/plain'})
        res.end("404 page not found")
    }
})

myserver.listen(3000,()=>{
    console.log("server is running")
}
)