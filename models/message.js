const { Schema, model } = require('mongoose');
const messageSchema = new Schema({
    chatId: {
        required: true,
        ref: 'Chat',
        type: Schema.Types.ObjectId
    },
    author: {
        required: true,
        ref: 'User',
        type: Schema.Types.ObjectId
    },
    text: String,
    created_at: Date

})


module.exports = model('Message', messageSchema)