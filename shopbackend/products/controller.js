
const currentport = process.env.PORT

const getItems = (req,res)=>{
    console.log("in products:getItems")
    res.send({"data" : ["list of products in category currentport "+currentport]})
}
const deleteItem = (req,res)=>{
    console.log("in products:deleteItem")
    const productid = req.params.id
    console.log("productid ",productid)
    res.send({"data" : "product deleted- productid "+productid+"-"+currentport})
}

module.exports = {
    getItems,deleteItem
}