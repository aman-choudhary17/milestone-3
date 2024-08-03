const validator = require('validator')
const path = require('path')
const express = require('express')

// console.log(__dirname)
// console.log(path.join(__dirname, '../frontend/public'))

const app = express()
const publicDirectory = path.join(__dirname, '../frontend/public')
const port = 3000

app.use(express.static(publicDirectory))


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