const express = require('express')
const app = express()
var cors = require('cors')

const cart = require("./cart")
const products = require("./products")
const auth = require("./auth")
const checkout = require("./checkout")

app.use(cors())

let port = process.env.PORT;
let hostaddress= "localhost"
console.log("port ",port)


let cartRouter = express.Router();
cartRouter.use("/cart",cart)

let productsRouter = express.Router();
productsRouter.use("/products",products)

let checkoutRouter = express.Router();
checkoutRouter.use("/checkout",checkout)

let authRouter = express.Router();
authRouter.use("/auth",auth)

app.use("/api",cartRouter)
app.use("/api",productsRouter)
app.use("/api",checkoutRouter)
app.use(authRouter)




let server = app.listen(port,hostaddress,()=>{
    console.log("server started at port- ",server.address().port," -address- ",server.address().address)
})