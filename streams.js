const fs = require("fs")
const util = require("util")
const asyncwrite = util.promisify(fs.appendFile)

const start = async()=>{
    try{
for(i=0;i<1000;i++){
   await asyncwrite("first.txt",`hello brother for the ${i}th time \n`)
}
    }
    catch(error){
        console.log(error)
    }
}
start()