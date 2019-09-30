const mongoose = require('mongoose')

const stationarySchema = mongoose.Schema({
    gpn: String,
    type: String,
    time: { type: Date, default: Date.now },
    status: String
});

module.exports = mongoose.model('stationary', stationarySchema);