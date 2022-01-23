const Users = require('./models/user.model');
const Employee = require('./models/employee.model');
const Experiences = require('./models/experience.model');
const employees = require('./data/employeeData');
const experiences = require('./data/experienceData');

const encryptLib = require('./modules/encryption');
require('dotenv').config();
const connectDB = require('./db/mongoose')

connectDB()

const username = "user"
const password = "password"

const importData = async ()=>{
    try {
        const encryptedPassword = encryptLib.encryptPassword(password);
        await Users.insertMany([{username,password:encryptedPassword,userRole:"admin"}])
        const employeesInserted = await Employee.insertMany(employees)
        const experiencesArray = []
        employeesInserted.forEach((employee)=>{
            let id = employee._id
            experiences.forEach(element => {
                let newObj = {}
                newObj.employeeId = id
                newObj.employeeExperience = element
                experiencesArray.push(newObj)
            });            
        })
        await Experiences.insertMany(experiencesArray)
        process.exit()
    }
    catch(error){ 
         console.log(error)
         process.exit(1)
    }
}

importData()