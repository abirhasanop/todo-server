const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()
const todoSchema = require('../Schemas/todoSchema')
const Todo = new mongoose.model("Todo", todoSchema)

// Get all the todo
router.get('/', async (req, res) => {
    try {
        const result = await Todo.find({}).select({ __v: 0 }).limit(2)
        res.send({
            message: "Success",
            data: result
        })
    } catch (err) {
        res.send({
            message: "There was a server side error while finding all todos"
        })
    }
})

// Get a todo
router.get('/:id', async (req, res) => {
    try {
        const result = await Todo.findOne({ _id: req.params.id })
        res.send({
            message: "Success",
            data: result
        })
    } catch (err) {
        res.send({
            message: "There was a server side error while finding a todo"
        })
    }
})

// post todo
router.post("/", async (req, res) => {
    try {
        const newTodo = new Todo(req.body)
        const result = await newTodo.save()
        res.send({
            message: "Todo was inserted succesfully",
            data: result
        })
    } catch (err) {
        res.send({
            message: "There Was a server side error while inserting a todo"
        })
        // console.log(err);
    }
})


// post multiple todo
router.post("/all", async (req, res) => {
    try {
        const result = await Todo.insertMany(req.body)
        res.send({
            message: "Todos were inserted succesfully",
            data: result
        })
    } catch (err) {
        res.send({
            message: "There was a server side error while inserting multiple todos"
        })
    }
})

// put todo
router.put("/:id", async (req, res) => {
    // Use findByIdAndUpdate instead of updateOne to update a and get the updated data at once
    try {
        const result = await Todo.findByIdAndUpdate({ _id: req.params.id }, {
            $set: {
                title: "Stop coding, start gaminng.......",
                status: false
            }
        })
        res.send({
            message: "Todo was updated succesfully",
            data: result
        })
    } catch (err) {
        res.send({
            message: "There was a server side error while updating a todo"
        })
    }
})

// delete todo
router.delete("/:id", async (req, res) => {
    try {
        // const id = req.params.id
        // const query = { _id: id }
        const result = await Todo.deleteOne({ _id: req.params.id })
        res.send({
            message: "Todo was deleted succesfully",
            data: result
        })
    } catch (err) {
        res.send({
            message: "There was a server side error while deleting a todo"
        })
    }
})

module.exports = router