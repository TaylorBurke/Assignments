const mongoose = require('mongoose');

const sleepSchema = new mongoose.Schema({
    year: {
        type: String,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    sleepHours: {
        type: Number,
        required: true
    },
    isDeposit: {
        type: Boolean,
        required: true
    },
    notes: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('food', foodSchema);