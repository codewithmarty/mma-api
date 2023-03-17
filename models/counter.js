const mongoose = require('mongoose');

const counterSchema = new mongoose.Schema({
    count: { type: Number, default: 0 }  
}, {
    timestamps: true
});

module.exports = mongoose.model('Counter', counterSchema);