const express = require("express")
const app = express()
const {v4: uuid} = require("uuid")

app.use(express.json())

const bounties = [
    {
        firstName: "Luke",
        lastName: "Skywalker",
        living: true,
        bountyAmount: 5000,
        type: "Jedi",
        _id: uuid()
    }

]

app.get("/bounties", (req, res) => {
    res.send(bounties)
})

app.post("/bounties", (req, res)=>{
    req.body._id = uuid()
    bounties.push(req.body)
    res.send(`Submitted ${req.body.firstName} in bounties!`)
})

app.listen(9000, () => {
    console.log("Running on port 9000")
})