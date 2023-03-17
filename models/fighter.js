const mongoose = require('mongoose');

const fighterSchema = new mongoose.Schema({
    name: String,
    age: Number,
    status: String,
    nickname: String,
    "weight-class": String,
    thumbnail: String,
    "full-thumbnail": String,
    stats: Object 
});

module.exports = mongoose.model('Fighter', fighterSchema);