const express = require("express")
const app = express()
const { v4: uuid } = require("uuid")

app.use(express.json())

const bounties = [
    {
        firstName: "Luke",
        lastName: "Skywalker",
        living: true,
        bountyAmount: 5000,
        type: "Jedi",
        _id: uuid()
    },

    {
        firstName: "Darth",
        lastName: "Maul",
        living: true,
        bountyAmount: 2000,
        type: "Sith",
        _id: uuid()
    }

]

//Get All

app.get("/bounties", (req, res) => {
    res.send(bounties)
})

//Get One

app.get("/bounties/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    let foundBounty = bounties.find(each => each._id === bountyId)
    res.send(foundBounty)
})

//Post One

app.post("/bounties", (req, res) => {
    req.body._id = uuid()
    bounties.push(req.body)
    res.send(req.body)
})

//Put One

app.put("/bounties/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    let editBounty = bounties.find(each => each._id === bountyId)
    let newBounty = Object.assign(editBounty, req.body)
    res.send(bounties)
})

//Delete One

app.delete("/bounties/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    let index = bounties.findIndex((each) => (each._id === bountyId))
    bounties.splice(index, 1)
    res.send(bounties)
})

app.listen(9000, () => {
    console.log("Running on port 9000")
})