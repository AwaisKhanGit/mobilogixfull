import express from 'express'
const router = express.Router();
import Experience from '../models/experience.model'
import Employee from '../models/employee.model'
import  {
  rejectUnauthenticated,
  rejectUnauthorized
} from '../modules/authentication-middleware'
import multer from 'multer'
import  {
  storage,
  cloudinary
} from '../modules/authentication-middleware'

const upload = multer({storage})


router.get('/', rejectUnauthenticated, 
  async (req, res) => {
    try {         
      const employee = await Employee.aggregate([
          {
            $lookup:
              {
                from: Experience.collection.name,       
                localField: "_id",  
                foreignField: "employeeId",
                as: "experiences"
              }
          }
        ])
          res.status(200).send(employee)
        } 
    catch (error) 
      {
        res.status(500).send(error)
      }
  });



router.post('/', rejectUnauthenticated, rejectUnauthorized, upload.single('image'), 
  async (req, res) => {
    try { 
      if( !req.file.filename && !req.file.path){
              res.sendStatus(400)
      }
      else {
        const {name, designation, grossSalary, netSalary, taxes, role, department,status, experiences} = req.body
        if ( JSON.parse(experiences).length > 0)
        {
          const employee = new Employee({ name, designation, grossSalary, netSalary, taxes, role, department, status, picUrl : req.file.path, picName : req.file.filename})
          await employee.save()
          await Promise.all(
            JSON.parse(experiences).map((element) => {
            const experience = new Experience({employeeId : employee._id, 
            employeeExperience : element })
            experience.save()
        }))
        res.sendStatus(200)}
        else {
          res.sendStatus(400)
        }}}
    catch (error) {
        await cloudinary.uploader.destroy(req.file.filename)
        console.log(error)
        res.status(500).send(error)
      }
  });


router.put('/:id', rejectUnauthenticated, rejectUnauthorized, 
  async (req, res) => {
    try { 
          const {id} = req.params
          const {name, designation, grossSalary, netSalary, taxes, role, department,status, experiences} = req.body
          if (experiences.length > 0){
          await Employee.findOneAndUpdate({_id: id}, {$set:{name, designation, grossSalary, netSalary, taxes, role, department,status}},
            { runValidators: true, upsert: true, new: true })
          await Experience.deleteMany({employeeId:id})
          await Promise.all(
          experiences.map((element) => {
            const experience = new Experience({employeeId : id, 
            employeeExperience : element })
            experience.save()
          }))
          res.sendStatus(200)
        }
        else {
          res.sendStatus(400)
        }    
        } 
    catch (error) {
        res.status(500).send(error)
      }
  });



router.put('/image/:id', rejectUnauthenticated, rejectUnauthorized, upload.single('image'), 
  async (req, res) => {
  const {id} = req.params
  try {
    if(!req.file.filename){throw new Error('No Image')}
    const response = await Employee.findOneAndUpdate({_id: id}, {$set:{picUrl:req.file.path,
      picName : req.file.filename}},{ runValidators: true})
    await cloudinary.uploader.destroy(response.picName)
    res.status(200).send(req.file.path)
  } catch (error) {
    if(req.file) await cloudinary.uploader.destroy(req.file.filename)
    res.sendStatus(500)
  }
}
);

router.delete('/:id', rejectUnauthenticated, rejectUnauthorized, async (req, res) => {
    const {id} = req.params
    try {
        const response = await Employee.findOneAndDelete({ _id: id})
        await Experience.deleteMany({employeeId:id})
        await cloudinary.uploader.destroy(response.picName)
        res.sendStatus(200)
    } catch (e) {
      res.status(500).send(e)
    }
  })

exports.default = router;