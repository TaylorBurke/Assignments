const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');
const PORT = 8080;
const logger = require ('./middleware');
// const uuid = require('uuid');

app.use(bodyParser.json());
app.use(logger);
// app.use(authenticate);

app.use('/movies', require("./routes/movies"))
// app.use('/actors', require('./routes/actors'))

app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)
})