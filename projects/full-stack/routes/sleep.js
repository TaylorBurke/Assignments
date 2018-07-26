const express = require('express');
const sleepRoutes = express.Router();
const Sleep = require("../models/sleep");

sleepRoutes.get('/', (req, res) => {
    const query = {};
    if (req.query.isDeposit) {
        query.isDeposit = req.query.
    }
})