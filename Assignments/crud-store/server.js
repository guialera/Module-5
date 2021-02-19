const express = require("express")
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")

mongoose.connect("mongodb://localhost:27017/crudStoredb",
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

app.use("/inventory", require("./routes/inventoryRoutes.js"))

app.use((error, req, res, next) => {
    console.log(error)
    return res.send({ errorMessage: error.message })
})

app.listen(9000, () => {
    console.log("Port 9000 is listening!")
})