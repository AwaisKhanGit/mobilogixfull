const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
    employeeId: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Employee'
    },
    employeeExperience: {
        type: String,
        required: true
    }
},
{
    timestamps:true
})

const Experience = mongoose.model('Experience',experienceSchema)
module.exports = Experience
