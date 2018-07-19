const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid");
const PORT = 8080;

const DATABASE = [];

const app = express()
app.use(bodyParser.json());

app.route("/movies")
    .get((req, res) => {
        res.send(MOVIES);

    })
    .post((req, res) => {
        let newMovie = req.body;
        newMovie._id = uuid();

        MOVIES.push(newMovie);
        res.send(newMovie);
    });

app.route("/movies/:id")
    .get((req, res) => {
        req.params
})

app.listen(PORT, () => console.log(`server running on port ${PORT}`));