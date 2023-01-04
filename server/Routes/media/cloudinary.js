import {v2 as cloudinary} from 'cloudinary'
import {Router} from 'express';
import dotenv from 'dotenv';
import { removeBackground } from './removeBackground.js';
import sharp from 'sharp';
import multer from 'multer'
import { errorHandle } from '../../middleware/errorHandler.js';
dotenv.config()

export const cloudRouter = Router()
cloudinary.config({ 
    cloud_name: 'dmyv0thmy', 
    api_key: `${process.env.CLOUDINARY_KEY}`, 
    api_secret: `${process.env.CLOUDINARY_SECRET}`,
    secure: true
  });
  const upload = multer({
    limits:{ fieldSize: 25 * 1024 * 1024 },
  fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(jpeg|jpg|png)$/)) {
          return cb(new Error('Please upload an image file : .png/.jpeg/.jpg'))
      }
  
      cb(undefined, true)
  }})
 // Log the configuration
 console.log(cloudinary.config());
 
//=================Functions=============================

 export const uploadImage = async (imagePath) => {
     
     // Use the uploaded file's name as the asset's public ID and 
     // allow overwriting the asset with new versions
     const options = {
        //  use_filename: true,
         unique_filename: true,
         overwrite: true,
        };
        
        try {
            // Upload the image
            const result = await cloudinary.uploader.upload(imagePath, options);
            console.log(result);
            return result;
        } catch (error) {
            console.error(error);
        }
    };
    
export const cloud = async (req,res) => {
    try {
        const result = await uploadImage(`${req.body.file}`)
        console.log(result);
        res.send(result)
    } catch (error) {
        res.status(400).send({msg:error})
        console.error(error)
    }

}
export const resizeSharp = async (req,res) =>{
try {
    const op = await sharp(req.file.buffer).resize(1024,1024).png().toBuffer()
    console.log(req.body);
    res.set('Content-Type','image/png').send(op)
} catch (error) {
    console.error(error)
    res.status(400).send(error)
}
}
export const resize =async (req,res)=>{
    try {
        const size = req.body.size
        const response = await cloudinary.image("Olympic_flag.jpg", {gravity: "auto",crop: "fill", width: size,height:size ,transformation:[
            {effect: "background_removal"}
        ]})
        res.send(response)
    } catch (error) {
        res.status(401).send({msg:error})
    }
}

//=================Routes=================================

    cloudRouter.post('/resize', resize)
    cloudRouter.post('/upload', cloud)
    cloudRouter.post('/removebg', removeBackground)
    cloudRouter.post('/resizesharp', upload.single('image') ,resizeSharp ,errorHandle)
