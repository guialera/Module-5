const express = require("express")
const inventoryRouter = express.Router()
const InventoryModel = require("../models/inventory.js")

//Get All

inventoryRouter.get("/", (req, res, next) => {
    InventoryModel.find((error, inventory) => {
        if (error) {
            res.status(500)
            return next(error)
        }
        return res.status(200).send(inventory)
    })
})

//Post One

inventoryRouter.post("/", (req, res, next) => {
    const newInventory = new InventoryModel(req.body)
    newInventory.save((error, savedInventory) => {
        if (error) {
            res.status(500)
            return next(error)
        }
        return res.status(200).send(savedInventory)
    })
})

//Put One

inventoryRouter.put("/:inventoryId", (req, res, next) => {
    InventoryModel.findOneAndUpdate(
        { _id: req.params.inventoryId },
        req.body,
        { new: true },
        (error, updatedItem) => {
            if (error) {
                res.status(500)
                return next(error)
            }
            return res.status(201).send(updatedItem)
        }
    )
})

//Delete One

inventoryRouter.delete("/:inventoryId", (req, res, next) => {
    InventoryModel.findOneAndDelete({ _id: req.params.inventoryId }, (error, deletedItem) => {
        if (error) {
            res.status(500)
            return next(error)
        }
        return res.status(200).send(`Successfully deleted ${deletedItem.item}!`)
    })
})

module.exports = inventoryRouter