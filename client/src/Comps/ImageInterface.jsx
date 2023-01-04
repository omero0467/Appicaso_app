import React ,{useState}from 'react'
import { useEffect } from 'react'
import Form from './Form'
import Output from './Output'
import Preview from './Preview'
import SelectSize from './SelectSize'
import Skeleton from './Skeleton'
const ImageInterface = () => {
const [preview, setPreview] = useState(null)
const [size, setSize] = useState(null)
    const handleFile =(event)=>{
        const [file] = event.target.files
console.log(file)
 setPreview(prev=>prev=URL.createObjectURL(file))
    }

useEffect(()=>{console.log(size)},[size])
  return (
    <div>
    <Form className={'my-8'} handleFile={handleFile}/> 
    {preview?<div className={`container md:flex`}>
      <Preview className={'mr-8'} src={preview}/>
      <SelectSize setSize={setSize}/>
      <Output/>
    </div>:<Skeleton/>}
    </div>
  )
}

export default ImageInterface