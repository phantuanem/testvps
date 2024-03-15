const express = require('express')
const path = require('path');

const app = express()
app.use('/', express.static('public'))
app.set('views', __dirname + '/src/views');
app.engine('html', require('ejs').renderFile);


app.get('/', (req, res) => {
    res.render('index.html')
})

app.get('/about', (req, res) => {
    res.json('about')
})

var port = 3000;
app.listen(port, function () {
    console.log('Listening on http://localhost:%s', port);
});