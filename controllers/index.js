const Counter = require('../models/counter')

function index(req, res) {
    Counter.findOne().then(counter => {
        res.render('index', { counter });
    })
}

module.exports = {
    index
}