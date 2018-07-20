const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid");
const PORT = 8080;

const data = [{
    group: 'Democrat',
    group: 'Republican',
    group: 'Libertarian'
}];

const app = express()
app.use(bodyParser.json());

// app.route("/parties")
//     .get((req, res) => {
//         const foundParty = PARTIES.find(group._id === req.params.id)
//     })

    // .post((req, res) => {

    //     //save new movie
    //     let newMovie = req.body;
    //     //give it an id
    //     newMovie._id = uuid();
    //     // send movie back
    //     res.send(newMovie);

    // })

// app.route("/movies/:id/")
//     .get((req, res) => {
//         const foundMovie = MOVIES.find(movie => movie._id === req.params.id);
//     })
//     .put((req, res) => {
//         const toBeEdited = MOVIES.find(movie => movie._id === req.params.id);
//     })

// app.route("/movies/:id")
//     .get((req, res) => {
//         req.params
//     })

app.listen(PORT, () => console.log(`server running on port ${PORT}`));