// dependencies

const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid");

// import routes
//////////

// fake database

const bounties = []

// variables

const PORT = 8080

// app

const app = express()

// middleware

app.use("/bounties", require("./routes/bounties"));

app.listen(PORT, ()=> console.log(`server running on port ${PORT}`))