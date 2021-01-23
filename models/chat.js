const { Schema, model } = require('mongoose');
const chatSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    users: {
        users: [{
            usersId: {
                required: true,
                ref: 'User',
                type: Schema.Types.ObjectId
            }
        }]
    },
    created_at:Date

})


module.exports = model('Chat', chatSchema)