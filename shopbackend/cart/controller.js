
const currentport = process.env.PORT

const getItems = (req,res)=>{
    console.log("in cart:getItems")
    res.send({"data" : ["list of items in cart-"+currentport]})
}
const deleteItem = (req,res)=>{
    console.log("in cart:deleteItem")
    const itemid = req.params.id
    console.log("itemid ",itemid)
    res.send({"data" : "item deleted from cart- itemid "+itemid+"-"+currentport})
}

module.exports = {
    getItems,deleteItem
}