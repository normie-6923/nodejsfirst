const authorize = (req,res,next)=>{
    const {user} = req.query
    if(user === "john"){
        req.user = {name:'nalla',id:8}
        next()
    }
    else{
        res.status(401).send('unauthorized')
    }
    
}
module.exports = authorize