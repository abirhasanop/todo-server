const mongoose = require("mongoose")

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    status: {
        type: Boolean,
        enum: [true, false]
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = todoSchema