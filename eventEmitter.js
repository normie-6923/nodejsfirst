const eventEmitter = require("events")
const customEventEmitter = new eventEmitter()

customEventEmitter.on("response",()=>{
    console.log("data received")
})
customEventEmitter.on("response",()=>{
    console.log("custom emitter working")
})
customEventEmitter.emit("response")