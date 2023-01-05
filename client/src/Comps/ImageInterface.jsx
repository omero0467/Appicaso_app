import React, { useState } from "react";
import { useEffect } from "react";
import Form from "./Form";
import Output from "./Output";
import Preview from "./Preview";
import SelectSize from "./SelectSize";
import Skeleton from "./Skeleton";
import { resizeSharp, variate } from "../utils";
const ImageInterface = ({sendReqtoEdit,Type}) => {
  const [imageData, setImageData] = useState();
  const [preview, setPreview] = useState(null);
  const [size, setSize] = useState(256);
  const [outputImage, setOutputImage] = useState('')
  const [file, setFile] = useState(null)


  const clickHandle = (size, e) => {
    e.stopPropagation();
    setSize((prev) => (prev = size));
  };

  const handleInput = (event) => {

  };
  const handleFile = (event) => {
    // const [file] = event.target.files;
    setPreview((prev) => (prev = URL.createObjectURL(file)));
    event.preventDefault();
    let file
    if (event.dataTransfer) {
      file = event.dataTransfer.files[0]
    } else if (event.target) {
      file = event.target.files[0];
    }

    console.log(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImageData((prev)=>prev=reader.result);
      // uploadToCloudinary(reader.result)
      sendReqtoEdit(file,imageData,setOutputImage,size)
      // setAttribute('crossOrigin', 'anonymous')
    };
    // reader.readAsArrayBuffer(files[0])
    
  };

  useEffect(() => {
    console.log(outputImage);
  }, [outputImage]);

  return (
    <div>
      <Form Type={Type} className={"my-8"} handleFile={handleFile} />
      {preview ? (
        <div className={`container md:flex`}>
          <Preview className={"mr-8"} src={preview} />
          <SelectSize
            currentSize={size}
            clickHandle={clickHandle}
            setSize={setSize} />
          <Output outputRespone={outputImage} /> </div> ) : (
            <Skeleton /> )}
             </div>
  );
};

export default ImageInterface;
