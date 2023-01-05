import axios from "axios"
import { imageProcessing } from "./api/axiosInstance"

//==========Cloudinary========================================================================================================================
export const uploadToCloudinary = async(dataURL,setFunc)=>{
    try {
    const response = await imageProcessing.post('/cloudinary/upload',{file:dataURL})
    console.log(response.data)
    setFunc(response.data)
  } catch (error) {
    console.error(error)
  }
  }
//==========Sharp And Multer ========================================================================================================
export const resizeSharp = async(file,imageDataUrl,setFunc)=>{
    try {
      let formData = new FormData()
      formData.append('image',file)
      formData.append("imageData", imageDataUrl)
      // const newfile = convertDataURIToBinary(image)
    const response = await axios.post('http://127.0.0.1:8000/api/cloudinary/resizesharp',formData)
    // console.log(response.data)
    setFunc(response.data)
    
  } catch (error) {
    console.error(error)
  }
  }
export const editBgAuto = async(file,imageDataUrl,setFunc,size)=>{
    try {
      let formData = new FormData()
      formData.append('image',file)
      formData.append("imageData", imageDataUrl)
      formData.append('size',size)
      // const newfile = convertDataURIToBinary(image)
    const response = await axios.post('http://127.0.0.1:8000/api/media/editbg',formData,{
    'maxContentLength': Infinity,
    'maxBodyLength': Infinity})
    // console.log(response.data)
    setFunc(response.data)
    
  } catch (error) {
    console.error(error)
  }
  }
export const editBg = async(file,userInput,setFunc,size)=>{
    try {
      let formData = new FormData()
      formData.append('image',file)
      console.log(userInput);
      formData.append('userInput',userInput)
      formData.append("imageData", imageDataUrl)
      formData.append('size',size)
      // const newfile = convertDataURIToBinary(image)
    const response = await axios.post('http://127.0.0.1:8000/api/media/editbg',formData,{
    'maxContentLength': Infinity,
    'maxBodyLength': Infinity})
    // console.log(response.data)
    setFunc(response.data)
    
  } catch (error) {
    console.error(error)
  }
  }
export const variate = async(file,imageDataUrl,setFunc,size)=>{
    try {
      let formData = new FormData()
      formData.append('image',file)
      formData.append("imageData", imageDataUrl)
      formData.append('size',size)
      // const newfile = convertDataURIToBinary(image)
    const response = await axios.post('http://127.0.0.1:8000/api/media/variate2',formData,{
    'maxContentLength': Infinity,
    'maxBodyLength': Infinity})
    // console.log(response.data)
    setFunc(response.data)
    
  } catch (error) {
    console.error(error)
  }
  }

//================Standard Utils ==================================================================================================
  export const convertDataURIToBinary = dataURI => 
  Uint8Array.from(window.atob(dataURI.replace(/^data[^,]+,/,'')), v => v.charCodeAt(0));
//=================================================================================================================================