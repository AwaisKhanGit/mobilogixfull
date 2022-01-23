import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({

  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  userRole : {
    type: String,
    default : "member"
  } 
},
{
    timestamps:true
})

const User = mongoose.model('User',userSchema)
exports.default = User
