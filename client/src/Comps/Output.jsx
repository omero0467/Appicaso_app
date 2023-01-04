import React from "react";
import SkeletonLoader from "./SkeletonLoader";

const Output = ({outputRespone}) => {
  return (
    <div className="glass md:ml-8 md:w-3/6 h-[800px]">
      <h1 className="text-center text-6xl font-poppins font-bold my-8 text-white">
        Output
      </h1>
      {outputRespone?<img src={outputRespone} alt="output" />:<SkeletonLoader/>}
    </div>
  );
};

export default Output;
