import cloudy from 'cloudinary'
import { CloudinaryStorage } from 'multer-storage-cloudinary'

const cloudinary = cloudy.v2;
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})

const storage = new CloudinaryStorage({
    cloudinary,
    params:{
        folder: "User Images",
        allowedFormats:['jpg','png','jpeg']
    }
})

exports.default= {
    cloudinary,
    storage
}