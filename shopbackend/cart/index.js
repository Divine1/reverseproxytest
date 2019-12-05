const express = require('express');
const router = express.Router();
const controller = require('./controller')

router.get("/items",controller.getItems)
router.delete("/item/:id",controller.deleteItem)

module.exports=router
