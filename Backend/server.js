require('dotenv').config()

const express = require('express')
const cors = require('cors');
const connectDB = require('./db/connect')

const authRouter = require('./router/auth')
const taskRouter = require('./router/taskRoute')

const app = express()
const Port = process.env.PORT || 8000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors({ origin: "*" }));


app.get("/health", (req, res) => {
    res.status(200).json({ msg: "server is running" })
})
app.use(authRouter)
app.use(taskRouter)

const start = async () => {
    try {
        await connectDB()
        app.listen(Port, () => {
            console.log(`Server is running on port ${Port}`)
        })
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1) // Exit process with failure
    }
}

start()

