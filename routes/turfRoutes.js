const mongoose = require('mongoose');
const router = require('express').Router();
require('../model/turf');
require('../mongo');

const Turf = mongoose.model("turf");

router.get('/:date', (req, res) => {
    Turf.find({ date: req.params.date }).then(data => {
        res.send(data);
    });
});

router.get('/all/:gpn', (req, res) => {
    Turf.find({ gpn: req.params.gpn }).then(data => {
        res.send(data);
    });
});

router.post('/', (req, res) => {
    console.log(req.body);
    const Item = new Turf({
        gpn: req.body.gpn,
        date: req.body.date,
        value: req.body.value,
        status: req.body.status
    });
    Item.save().then(data => {
        res.send(data);
    }).catch(err => {
        throw err;
    })
});


module.exports = router;