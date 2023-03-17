const express = require('express');
const router = express.Router();
const fightersCtrl = require('../controllers/fighters')

/* GET home page. */
router.get('/all', fightersCtrl.index);
router.get('/active', fightersCtrl.getActive)
router.get('/:name', fightersCtrl.show)
router.get('/weight/:weight', fightersCtrl.getWeightClass)
router.get('/gender/:gender', fightersCtrl.getGender)

module.exports = router;
