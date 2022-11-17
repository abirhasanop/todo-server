const express = require("express")
const mongoose = require("mongoose")
const todoHandler = require("./routHandler/todoHandler")
const port = process.env.PORT || 5000


const app = express()
app.use(express.json())

// app.get('/', (req, res) => {
//     res.send("Server is running")
// })

// userName: moongose1
// password: dQIzYLVnc1rlrZIw

mongoose.connect(`mongodb+srv://moongose1:dQIzYLVnc1rlrZIw@cluster0.vn5qrrb.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connection successful"))
    .catch(err => console.log(err))

// application routes
app.use('/todo', todoHandler)


// function errorHandler(err, req, res, next) {

// }

app.listen(port, () => {
    console.log("Server running on port", port);
})