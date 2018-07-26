const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const mongoose = require('mongoose');
const sleepRoutes = require('./routes/sleep')


// import routes
//////


const data = []

// variables
const PORT = 3030;
const app = express();

mongoose.connect("mongodb://localhost/food", (err) => {
    if (err) throw err;
    console.log('Connected to the database');
});

app.use(bodyParser.json());
app.use("/sleep", require('./routes/sleep'));
app.listen(PORT, ()=> console.log(`server running on port ${PORT}`));



