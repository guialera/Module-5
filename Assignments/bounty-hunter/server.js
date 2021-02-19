//Server Not Connected To MongoDB

/*const express = require("express")
const app = express()
const { v4: uuid } = require("uuid")

app.use(express.json())

const bounties = [
    {
        firstName: "Luke",
        lastName: "Skywalker",
        living: "true",
        bountyAmount: 5000,
        type: "Jedi",
        _id: uuid()
    },

    {
        firstName: "Darth",
        lastName: "Maul",
        living: "true",
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
})*/

//Server Connected To MongoDB

const express = require("express")
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")
const BountyModel = require("./models/bountyModels.js")

mongoose.connect("mongodb://localhost:27017/bountyHunterdb",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log("Connected to MongoDB!"))
    .catch(error => console.log(error))

app.use(express.json())

app.use(morgan("dev"))

//Get All

app.get("/bounties", (req, res, next) => {
    BountyModel.find((err, bounties) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

//Get One

app.get("/bounties/:bountyId", (req, res, next) => {
    BountyModel.findById({ _id: req.params.bountyId }, (err, foundBounty) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(foundBounty)
    })
})

//Post One

app.post("/bounties", (req, res, next) => {
    const newBounty = new BountyModel(req.body)
    newBounty.save((err, savedBounty) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedBounty)
    })
})

//Put One

app.put("/bounties/:bountyId", (req, res, next) => {
    BountyModel.findOneAndUpdate(
        { _id: req.params.bountyId },
        req.body,
        { new: true },
        (err, updatedBounty) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBounty)
        }
    )
})

//Delete One

app.delete("/bounties/:bountyId", (req, res, next) => {
    BountyModel.findOneAndDelete({ _id: req.params.bountyId }, (err, deletedBounty) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedBounty.firstName}`)
    })
})

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({ errMessage: err.message })
})

app.listen(9000, () => {
    console.log("Running on port 9000")
})