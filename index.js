const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const db = require('./recipeAccess')

const server = express()

server.use(express.json());
server.use(helmet());
server.use(cors());

server.get('/api/dishes', (req, res) => {
    db.getDishes()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

server.get('/api/dishes/:id', (req, res) => {
    const id = req.params.id;
    db.getDish(id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

const port = 4000;
server.listen(port, () => console.log(`Running on port ${port} right now!`));