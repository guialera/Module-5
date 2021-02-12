const express = require("express")
const middleWare = express.Router()

middleWare.use("/items", (req, res, next) => {
    console.log("Middle Ware Ran!")
    next()
})

middleWare.use("/items", (req, res, next) => {
    req.body = { newItem: "Shoes", anotherItem: "Hat", lastItem: "Sunglasses" } 
    next()
})

module.exports = middleWare