import mongoose from 'mongoose'

const experienceSchema = new mongoose.Schema({
    employeeId: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Employee'
    },
    employeeExperience: {
        type: String,
        required: true
    }
})

const Experience = mongoose.model('Experience',experienceSchema)
exports.default = Experience
