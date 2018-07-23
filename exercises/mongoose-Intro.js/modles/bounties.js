const mongoose = require("mongoose");
const { Schema } = mongoose;

const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: String, 
    living: Boolean,
    price: Number,
    type: {
        type: String,
        enum: ["jedi", "sith", "Unknown"]
    },
});

//Model name should be capitalized and singular
// const bountyModel = mongoose.model("Bounty", bountySchema);
module.exports = mongoose.model("Bounty", bountySchema);