import React, { useState } from "react";
import { useEffect } from "react";
import Form from "./Form";
import Output from "./Output";
import Preview from "./Preview";
import SelectSize from "./SelectSize";
import Skeleton from "./Skeleton";
const ImageInterface = ({sendReqtoEdit,Type}) => {
  const [imageData, setImageData] = useState();
  const [preview, setPreview] = useState(null);
  const [size, setSize] = useState(256);
  const [outputImage, setOutputImage] = useState('')
  const [file, setFile] = useState(null)
  const [isLoading, setIsLoading] = useState(false)


  const clickHandle = async (size, e) => {
   try{ 
    e.stopPropagation();
    setIsLoading(true)
    setOutputImage('')
    if(!isLoading){
      setSize((prev) => (prev = size));
      await sendReqtoEdit(file,imageData,setOutputImage,size)
      setIsLoading(false)
    }
  }catch(err){
      console.error(err);
    }
  };

  const handleInput = (event) => {
    setImageData(prev=>prev=event.target.value)
  };
  const handleFile = (event) => {
    // const [file] = event.target.files;
    event.preventDefault();
    let file
    if (event.dataTransfer) {
      file = event.dataTransfer.files[0]
    } else if (event.target) {
      file = event.target.files[0];
    }
    setPreview((prev) => (prev = URL.createObjectURL(file)));

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      Type!=='edit'&&setImageData((prev)=>prev=reader.result)
      setFile(prev=>prev=file)
      // uploadToCloudinary(reader.result)
      // setAttribute('crossOrigin', 'anonymous')
    };
    // reader.readAsArrayBuffer(files[0])
    
  };

  useEffect(() => {
    console.log(file);
  }, [file]);

  return (
    <div>
      <Form Type={Type} handleInput={handleInput} className={"my-8"} handleFile={handleFile} />
      {preview ? (
        <div className={`container md:flex`}>
          <Preview className={"mr-8"} src={preview} />
          <SelectSize
          isLoading={isLoading}
            currentSize={size}
            clickHandle={clickHandle}
            />
          <Output isLoading={isLoading} outputRespone={outputImage} /> </div> ) : (
            <Skeleton/>)}
             </div>
  ); 
};

export default ImageInterface;
