const mongoose = require('mongoose');

const autoIncrement = require('mongoose-auto-increment');

const usersSchema = new mongoose.Schema({
    emailId: {
        type: String
    },
    password: {
        type: String
    }
});
autoIncrement.initialize(mongoose.connection);

usersSchema.plugin(autoIncrement.plugin, 'users');
const Users = mongoose.model('Users',usersSchema,'users');

module.exports = {
    Users
}

