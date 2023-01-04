import { Router } from "express"
import { Configuration, OpenAIApi } from "openai";
import dotenv from 'dotenv'
import axios from "axios";
import fs from 'fs'
import sharp from 'sharp';
import multer from 'multer'
import { errorHandle } from '../../middleware/errorHandler.js';
dotenv.config()

export const mediaRouter = Router()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const upload = multer({
  limits: { fieldSize: 50 * 1024 * 1024 },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png)$/)) {
      return cb(new Error('Please upload an image file : .png/.jpeg/.jpg'))
    }

    cb(undefined, true)
  }
})

export const editRef = async (req, res) => {
  try {
    const response = await openai.createImageEdit(
      //original
      fs.createReadStream("/Users/omerevron/Code/Bootcamp/Final Project/server/Routes/media/me.png"),
      //mask
      fs.createReadStream("/Users/omerevron/Code/Bootcamp/Final Project/server/Routes/media/memask.png"),
      "us in a mountain scenery",
      1,
      "1024x1024"
    );
    let image_url = response.data.data[0].url;

    console.log(image_url);
    res.send(`<img src='${image_url}' alt="hi">`)
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).send(error.response.data)
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
      res.status(500).send(error.message)
    }
  }
}
export const edit = async (req, res) => {
  try {
    const response = await openai.createImageEdit(
      fs.createReadStream("/Users/omerevron/Code/Bootcamp/Final Project/server/Routes/media/Test photos/tigermask1024.png"),
      fs.createReadStream("/Users/omerevron/Code/Bootcamp/Final Project/server/Routes/media/Test photos/tigermask1024.png"),
      "a tiger floating in the ocean",
      1,
      "512x512"
    );
    let image_url = response.data.data[0].url;

    console.log(image_url);
    res.send(`<img src='${image_url}' alt="hi">`)
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).send(error.response.data)
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
      res.status(500).send(error.message)
    }
  }
}
export const variate = async (req, res) => {

  try {
    const buffer = req.file.buffer
    console.log(buffer);
    // Set a `name` that ends with .png so that the API knows it's a PNG image
    buffer.name = "image.png";
    const response = await openai.createImageVariation(
      buffer,
      1,
      "256x256"
    );
    let image_url = response.data.data[0].url;
    console.log(image_url);
    res.send(`<img src=${image_url} alt="hi">`)
    // return response
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).send(error.response.data)
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
      res.status(500).send(error.message)
    }
  }
}

export const editFromUser = async (req, res) => {
  try {
    const response = await openai.createImageEdit(
      fs.createReadStream("/Users/omerevron/Code/Bootcamp/Final Project/server/Routes/media/Test photos/tigermask1024.png"),
      fs.createReadStream("/Users/omerevron/Code/Bootcamp/Final Project/server/Routes/media/Test photos/tigermask1024.png"),
      "a tiger floating in the ocean",
      1,
      "512x512"
    );
    let image_url = response.data.data[0].url;

    console.log(image_url);
    res.send(`<img src='${image_url}' alt="hi">`)
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).send(error.response.data)
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
      res.status(500).send(error.message)
    }
  }
}

export const variate2 = async (req, res) => {
  try {
    const size = +req.body.size
    const op = await sharp(req.file.buffer).resize(size, size).png().toBuffer()
    console.log(req.body);
    res.set('Content-Type', 'image/png')
    op.name = "image.png";
    console.log(op.name);
    const response = await openai.createImageVariation(
      op,
      1,
      `${size}x${size}`
    );
    let image_url = response.data.data[0].url;
    console.log(image_url);
    // res.send(`<img src=${image_url} alt="hi">`)
    return res.send(image_url)
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
      return res.status(error.response.status).send(error.response.data)
    } else if(error.message) {
      console.log(error.message);
      return res.status(500).send(error.message)
    } else {
    console.error(error)
    return res.status(400).send(error)
  }
}
}



mediaRouter.post('/variate', variate)
mediaRouter.post('/edit', edit)
mediaRouter.post('/editref', editRef)
mediaRouter.post('/variate2', upload.single('image'), variate2, errorHandle)
