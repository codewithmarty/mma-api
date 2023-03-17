const Counter = require('../models/counter')
const moment = require('moment')

function index(req, res) {
    Counter.findOne().then(counter => {
        res.render('index', { counter, moment });
    })
}

module.exports = {
    index
}