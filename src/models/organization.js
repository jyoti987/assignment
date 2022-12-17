const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const OrganizationSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type: String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    cropId : {
        type : ObjectId,
        ref: "crops",
        required : true
    },
    field : {
        type : String,
        required : true
    }
}, {timestamps: true})

module.exports = mongoose.model('organization', OrganizationSchema)