const mongoose = require('mongoose');
const {Schema} = mongoose

const Subject = new Schema({
    name: {
        type: String,
        required: true,
        unique:true
    },
    profesor:{
        type: String,
        required:true
    },
    price: {
        type: Number,
        require: true
    },
    schedule:{
        type: Date
    }
});

const subjectModel = mongoose.model('subjectModel',Subject);

module.exports = subjectModel;