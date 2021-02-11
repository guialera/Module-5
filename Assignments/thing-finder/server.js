const express = require("express")
const app = express()

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
    }, {
        name: "pants",
        type: "clothing",
        price: 2500,
    }, {
        name: "basket ball",
        type: "toy",
        price: 1000,
    }, {
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    }, {
        name: "shirt",
        type: "clothing",
        price: 800,
    }, {
        name: "soup",
        type: "food",
        price: 300,
    }, {
        name: "flour",
        type: "food",
        price: 100,
    }
]

//Get All

app.get("/items", (req, res) => {
    res.send(inventoryItems)
})

//Get By Item Type

app.get("/search/type", (req, res) => {
    const type = req.query.type
    const foundItem = inventoryItems.filter(each => each.type === type)
    res.send(foundItem)
})

app.get("/search/range", (req, res) => {
    const max = req.query.max
    const min = req.query.min
    const maxMin = inventoryItems.filter((each) => (each.price >= min && each.price <= max))
    res.send(maxMin)
})

app.listen(9000, () => {
    console.log("Port 9000 is listening!")
})