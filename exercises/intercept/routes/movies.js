const express = require('express');
const movieRoutes = express.Router();
const uuid = require('uuid');

const MOVIES = require("../movies.json");

movieRoutes.get('/', (req, res) => {
    res.send(MOVIES.filter(movie => {
        for (key in req.query) {
            if (String(movie[key]) !== req.query[key]) {
                return false;
            }
        }
        return true;
    }))
})
    .post('/', (req, res) => {
        let newMovie = req.body;
        newMovie._id = uuid();
        MOVIES.push(newMovie);
        res.send(newMovie);
    })
    // .put('/:id', (req, res) => {
    //     const toBeEdited = MOVIES
    // })

module.exports = movieRoutes;