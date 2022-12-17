const mongoose = require('mongoose');

const cropsSchema = new mongoose.Schema({
    cropName : {
        type : String,
        required : true
    },
    fieldName : {
        type : String,
        required : true
    },
    seasonName : {
        type : String,
        required : true
    },
    region : {
        type : String,
        required : true
    }
},{timesetamps : true})

module.exports = mongoose.model('crops', cropsSchema)