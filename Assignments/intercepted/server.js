const express = require("express")
const app = express()

app.use(express.json())

const randomItems = { items: "Soccer Ball" }

app.use("/", require("./middleWare.js"))

app.use("/", (req, res, next)=>{
    const addedItem = req.body
    const addedItems = Object.assign(randomItems, addedItem)
    res.send(addedItems)
})

app.listen(9000, () => {
    console.log("Port 9000 is listening!")
})