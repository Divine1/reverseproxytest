const express = require('express');
const router = express.Router();
const controller = require('./controller')

router.post("/authenticate",controller.authenticate)

module.exports=router
