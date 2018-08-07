const mongoose = require('mongoose');

const newUser = new mongoose.Schema({
    userName: {
        type: string,
        unique: true,
        required: true
    },
    passwprd: {
        type: string,
        required: true
    },
   email: {
       type: string,
       required: true
   },
   gender: {
       type: string,
       required: false
   },
   EXP: {
       type: number,
       required: true
   }
});

module.exports = mongoose.model('user', newUser);