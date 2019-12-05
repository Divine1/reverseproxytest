
const currentport = process.env.PORT

const authenticate = (req,res)=>{
    console.log("in auth:authenticate")
    res.send({"data" : "authentication success currentport "+currentport})
}


module.exports = {
    authenticate
}