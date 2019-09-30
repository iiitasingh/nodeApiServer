const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    gpn: String,
    password: String,
});

module.exports = mongoose.model('users', userSchema);