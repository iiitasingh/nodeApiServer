const mongoose = require('mongoose');
const router = require('express').Router();
require('../model/stationary');
require('../mongo');

const Stationary = mongoose.model("stationary");

router.get('/all/:gpn', (req, res) => {
    Stationary.find({ gpn: req.params.gpn }).then(data => {
        res.send(data);
    });
})

router.post('/', (req, res) => {
    console.log(req.body);
    const Item = new Stationary({
        gpn: req.body.gpn,
        type: req.body.type,
        status: req.body.status
    });
    Item.save().then(data => {
        console.log(data);
        res.send(data);
    }).catch(err => {
        throw err;
    })
})
module.exports = router;