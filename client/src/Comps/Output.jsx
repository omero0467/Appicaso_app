import React from "react";
import SkeletonLoader from "./SkeletonLoader";

const Output = ({outputRespone}) => {
  return (
    <div className="glass md:ml-8 md:w-3/6 flex flex-col h-[800px]">
      <h1 className="text-center text-6xl font-poppins font-bold my-8 text-white">
        Output
      </h1>
      <div className="objet-contain self-center max-w-[512px]">{outputRespone?<img src={outputRespone} className='object-contain' alt="output" />:<SkeletonLoader/>}</div>
    </div>
  );
};

export default Output;
