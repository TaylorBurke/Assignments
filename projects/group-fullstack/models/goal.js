const mongoose = require('mongoose');

const newGoal = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    title: {
        type: string,
        required: true
    },
    milestone: {
        type: string,
        required: false
    },
    description: {
        type: string,
        required: false
    },
    difficulty: {
        type: string,
        required: true
    },
    complete: {
        type: boolean,
        required: true
    }

});

module.exports = mongoose.model('goal', newGoal);