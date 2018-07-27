const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const mongoose = require('mongoose');
const sleepRoutes = require('./routes/sleep')

// variables
const PORT = 3030;
const app = express();

mongoose.connect("mongodb://localhost:27017/sleep", {useNewUrlParser:true})
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error(err));

app.use(bodyParser.json());
app.use("/sleep", require('./routes/sleep'));
app.listen(PORT, () => console.log(`server running on port ${PORT}`));



