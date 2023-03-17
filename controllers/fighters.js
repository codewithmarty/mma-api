const Fighter = require('../models/fighter')
const Counter = require('../models/counter')

function incrCounter() {
    Counter.findOne().then(counter => {
        counter.count += 1
        counter.save()
    })
}

function index(req, res) {
    try {
        Fighter.find({}).then(fighters => {
            incrCounter()
            res.status(200).json(fighters)
        })
    } catch (err) {
        res.status(400).json(err)
    }
}

function show(req, res) {
    try {
        req.params.name = req.params.name.replace('-', ' ')
        Fighter.findOne({name: req.params.name}).then(fighter => {
            incrCounter()
            res.status(200).json(fighter)
        })
    } catch (err) {
        res.status(400).json(err)
    }
}

function getActive(req, res) {
    try {
        Fighter.find({status: "Active"}).then(activeFighters => {
            incrCounter()
            res.status(200).json(activeFighters)
        })
    } catch (err) {
        res.status(400).json(err)
    }
}

function getWeightClass(req, res) {
    try {
        req.params.weight = req.params.weight[0].toUpperCase() + req.params.weight.substring(1)
        Fighter.find({"weight-class": req.params.weight}).then(fighters => {
            incrCounter()
            res.status(200).json(fighters)
        })
    } catch (err) {
        res.status(400).json(err)
    }
}

function getGender(req, res) {
    try {
        if (req.params.gender.toLowerCase() == "women") {
            Fighter.find({ "weight-class": /.*Women.*/ }).then(womenFighters => {
                incrCounter()
                res.status(200).json(womenFighters)
            })
        } else if (req.params.gender.toLowerCase() == "men") {
            Fighter.find({ "weight-class": { $not: /.*Women.*/ } }).then(menFighters => {
                incrCounter()
                res.status(200).json(menFighters)
            })
        }
    } catch (err) {
        res.status(400).json(err)
    }
}


module.exports = {
    index,
    show,
    getActive,
    getWeightClass,
    getGender
}