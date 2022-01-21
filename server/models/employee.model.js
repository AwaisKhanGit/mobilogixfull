const mongoose = require('mongoose');
const Experience = require('../models/experience.model');

const employeeSchema = new mongoose.Schema({
    picUrl: {
        type: String,
        required: true
    },
    picName: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    grossSalary: {
        type: Number,
        required: true
    },
    netSalary: {
        type: Number,
        required: true
    },
    taxes: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    }
},
{
    timestamps:true
})

const Employee = mongoose.model('Employee',employeeSchema)
module.exports = Employee