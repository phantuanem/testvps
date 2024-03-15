const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json('home')
})

app.get('/about', (req, res) => {
    res.json('about')
})

app.listen(3000, () => {
    console.log('Server listening 3000')
})