
const currentport = process.env.PORT

const getItems = (req,res)=>{
    console.log("in checkout:getItems")
    res.send({"data" : "checkout:getItems currentport "+currentport})
}


module.exports = {
    getItems
}