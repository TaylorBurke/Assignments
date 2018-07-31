const mongoose = require('mongoose');

const sleepTransaction = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    sleepHours: {
        type: Number,
        required: true
    },
    notes: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Sleep', sleepTransaction);