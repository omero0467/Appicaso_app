import React ,{useState}from 'react'
import Form from './Form'
import Preview from './Preview'
const ImageInterface = () => {
const [preview, setPreview] = useState(null)
    const handleFile =(event)=>{
        const [file] = event.target.files
console.log(file)
 setPreview(prev=>prev=URL.createObjectURL(file))
    }
  return (
    <>
    <Form handleFile={handleFile}/>
    {<Preview src={preview}/>}
    {preview&&<SelectSize/>}
    </>
  )
}

export default ImageInterface