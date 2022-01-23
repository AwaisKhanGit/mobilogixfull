import Users from './models/user.model'
import Employee from './models/employee.model'
import Experiences from './models/experience.model'
import employees from './data/employeeData'
import experiences from './data/experienceData'
import encryptLib from './modules/encryption'
import connectDB from './db/mongoose'
import dotenv from 'dotenv';
dotenv.config()

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