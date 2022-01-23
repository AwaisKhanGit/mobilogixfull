import mongoose from 'mongoose'

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
        required: true,
        maxlength: 30
    },
    designation: {
        type: String,
        required: true,
        maxlength: 30
    },
    grossSalary: {
        type: Number,
        required: true,
        min: 0,
        max: 1000000000000
    },
    netSalary: {
        type: Number,
        required: true,
        min: 0,
        max: 1000000000000
    },
    taxes: {
        type: Number,
        required: true,
        min: 0,
        max: 1000000000000
    },
    role: {
        type: String,
        required: true,
        maxlength: 30
    },
    status: {
        type: String,
        required: true,
        enum : ["active", "resigned", "terminated"]
    },
    department: {
        type: String,
        required: true,
        enum : ["Customer Care", "Technical", "Human Resource"]
    }
},
{
    timestamps:true
})

const Employee = mongoose.model('Employee',employeeSchema)
exports.default = Employee