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
export const variate = async(file,imageDataUrl,setFunc)=>{
    try {
      let formData = new FormData()
      formData.append('image',file)
      formData.append("imageData", imageDataUrl)
      // const newfile = convertDataURIToBinary(image)
    const response = await axios.post('http://127.0.0.1:8000/api/media/variate2',formData)
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