const validator = require('validator')
const path = require('path')
const express = require('express')

// console.log(__dirname)
// console.log(path.join(__dirname, '../frontend/public'))

const app = express()
const publicDirectory = path.join(__dirname, '../frontend/public')
const port = 3000
const { connect } = require("./db.js")

app.use(express.static(publicDirectory))


connect().then((connection) => {
    console.log("connected database")
}).catch((error) => {
    console.log("database error")
    console.log(error)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/help', (req, res) => {
    res.send('Help section')
})

// app.com
// app.com/help
// app.com/about

app.listen(port, () => {
    console.log(`Server is runing on ${port}`)
})