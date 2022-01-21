const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    employeePicUrl: {
        type: String,
        required: true,
        unique: true
    },
    employeePicName: {
        type: String,
        required: true,
        unique: true
    },
    employeeName: {
        type: String,
        required: true
    },
    employeeDesignation: {
        type: String,
        required: true
    },
    employeeGrossSalary: {
        type: Number,
        required: true
    },
    employeeNetSalary: {
        type: Number,
        required: true
    },
    employeeTaxes: {
        type: Number,
        required: true
    },
    employeeRole: {
        type: String,
        required: true
    },
    employeeStatus: {
        type: String,
        required: true
    },
    employeeDepartment: {
        type: String,
        required: true
    }
},
{
    timestamps:true
})

const Employee = mongoose.model('Employee',employeeSchema)
module.exports = Employee
