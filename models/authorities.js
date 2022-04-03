const mongoose = require('mongoose');

const autoIncrement = require('mongoose-auto-increment');

const authorSchema = new mongoose.Schema({
    emailId: {
        type: String
    },
    authorities:{
        type: String
    }
});
autoIncrement.initialize(mongoose.connection);

authorSchema.plugin(autoIncrement.plugin, 'authorities');
const Authorities = mongoose.model('Authorities',authorSchema,'authorities');

module.exports = {
    Authorities
}
