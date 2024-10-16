// console.log(__dirname)
// console.log(__filename)

// let iterval = setInterval(() => {
//     console.log("hello world")
// }, 1000);

// setTimeout(()=>{
// clearInterval(iterval)
// },5000)

const namesjs = require("./directoriy1/name.js")
const sayhi = require("./directoriy1/utils.js")

console.log(namesjs.secret)
sayhi("anurag")
