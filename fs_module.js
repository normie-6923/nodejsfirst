// const fs = require("fs")

// const first = fs.readFile("./first.txt","utf8")
// console.log(first)
// const second = fs.readFile("./second.txt","utf8")
// console.log(second)

// fs.writeFile("./first.txt","this is the next text that would be writtne inside the first text file.");
// console.log("first file updated successfully!")
// fs.writeFile("./second.txt","this is the next text that would be added inside the second text file.");
// console.log("second file updated successfully!")

// const firstupdated = fs.readFile("./first.txt","utf8")
// console.log(firstupdated)
// const secondupdated = fs.readFile("./second.txt","utf8")
// console.log(secondupdated)


// fs.rmdir("./textfile",{recursive:true,force:true},(err)=>{
//     console.log("removed file")
// })

// fs.unlink("./textfile/first.txt",{recursive:true,force:true},(err)=>{
//     console.log("removed file")
// })


//using util.promisify

const fs = require("fs")
const util = require("util")

const readfilep = util.promisify(fs.readFile);
const writefilep = util.promisify(fs.writeFile);

const start = async()=>{
    try{
const first = await readfilep("first.txt","utf8")
const second = await readfilep("second.txt","utf8")
await writefilep("first.txt","this is changed now!")
console.log(first+"\n",second)
console.log("this ends here")
    }
    catch(error){
console.log(error)
    }
}
start()