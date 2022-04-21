const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const feedbackSchema = new mongoose.Schema({
    title: {
        type: String
    },
    detail: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    emailId: {
        type: String
    },
    product_id: {
        type: String
    },
    role: {
        type: String
    },
    feedback_id: {
        type: Number
    }
});
autoIncrement.initialize(mongoose.connection);
feedbackSchema.plugin(autoIncrement.plugin, 'feedbacks');

const Feedbacks = mongoose.model('Feedbacks', feedbackSchema, 'feedbacks');

module.exports = {
    Feedbacks
}
