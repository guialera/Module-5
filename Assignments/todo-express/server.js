const express = require("express")
const app = express()
const { v4: uuid } = require("uuid")

app.use(express.json())

const todoList = [
    {
        name: "Go To Dentist",
        description: "Attend 10 am appointment at dentist.",
        imageUrl: "https://www.arlingtondentalteam.com/wp-content/uploads/2016/10/family-dentist-children-seniors.jpg",
        completed: false,
        _id: uuid()
    }
]

// Get All

app.get("/todoList", (req, res) => {
    res.send(todoList)
})

//Get One

app.get("/todoList/:todoId", (req, res) => {
    let todoId = req.params.todoId
    let foundTodo = todoList.find(each => each._id === todoId)
    res.send(foundTodo)
})

//Post One

app.post("/todoList", (req, res) => {
    let newPost = req.body
    let id = { _id: uuid() }
    let addedId = Object.assign(newPost, id)
    todoList.push(addedId)
    res.send(addedId)
})

//Put One

app.put("/todoList/:todoId", (req, res) => {
    let todoId = req.params.todoId
    let foundTodo = todoList.find(each => each._id === todoId)
    let editTodo = Object.assign(foundTodo, req.body)
    res.send(editTodo)
})

//Delete One

app.delete("/todoList/:todoId", (req, res) => {
    let todoId = req.params.todoId
    let index = todoList.findIndex(each => each._id === todoId)
    todoList.splice(index, 1)
    res.send("Todo successfully deleted!")
})

app.listen(9000, () => {
    console.log("Port 9000 is listening!")
})