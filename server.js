require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')
const path = require('path')

const app = express()
const port = process.env.PORT

app.use(bodyParser.json())
app.use('/api', routes)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}

app.get('*', (req, res) => {
    let url = path.resolve(__dirname, 'client', 'build', 'index.html')
    res.sendFile(url)
})

app.listen(port, console.log(`server running on port ${port}`))