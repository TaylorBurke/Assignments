const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const PORT = 8080;
const app = express();
const MONGODB_URI = "mongodb://localhost:27017/demo"

app.use(bodyParser.json())
    .use("/bounties", require("./routes/bounties"))

mongoose.connect(MONGODB_URI, {useNewUrlParser: true})
    .then(db => console.log("connected to MongoDB"))
    .catch(err => console.log(err))

app.listen(PORT, () => console.log(`server running on port ${PORT}`));