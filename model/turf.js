const mongoose = require('mongoose')

const turfSchema = mongoose.Schema({
    gpn: String,
    date: String,
    value: String,
    status: String
});

module.exports = mongoose.model('turf', turfSchema);