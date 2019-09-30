const mongoose = require('mongoose');
const router = require('express').Router();
require('../model/user');
require('../mongo');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const User = mongoose.model("users");

router.get('/:gpn', (req, res) => {
    User.findOne({ gpn: req.params.gpn }).then(data => {
        console.log(data);
        res.send(data);
    });
});

router.post('/', (req, res) => {
    console.log(req.body);
    bcrypt.hash(req.body.password, saltRounds).then(function (hash) {
        // Store hash in your password DB.
        const Item = new User({
            gpn: req.body.gpn,
            password: hash,
        });
        Item.save().then(data => {
            console.log(data);
            res.send(data);
        });

    }).catch(err => {
        throw err;
    })
});

router.post('/:gpn', (req, res) => {
    User.findOne({ gpn: req.params.gpn }).then(data => {
        console.log(data);
        if (data != null) {
            bcrypt.compare(req.body.password, data.password).then(function (res1) {
                if (res1 == true) {
                    res.send(data);
                } else {
                    console.log("loginError");
                    res.send({ gpn: "error" });
                }
            });
        } else {
            console.log(res);
            res.send({ gpn: "error" });
        }
    }).catch((err) => {
        throw err;
    })
});

module.exports = router;