const { Schema, model } = require('mongoose');
const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    created_at: Date

})


module.exports = model('User', userSchema)