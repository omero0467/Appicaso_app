import { CheckIcon } from "@heroicons/react/24/solid";
import { Button } from "flowbite-react";
import React from "react";
import SkeletonLoader from "./SkeletonLoader";
const Output = ({ outputRespone, isLoading }) => {
  return (
    <div className="glass md:ml-8 md:w-3/6 flex flex-col h-[800px]">
      <h1 className="text-center text-6xl font-poppins font-bold my-8 text-white">
        Output
      </h1>
      <div className="objet-contain self-center max-w-[512px]">
        {outputRespone ? (
          <img src={outputRespone} className="object-contain" alt="output" />
          ) : (
            <SkeletonLoader isLoading={isLoading} />
            )}
         <Button
         className="w-full buttonClass"
      outline={true}
      gradientDuoTone="purpleToBlue"
      >
      <div className="flex items-end mb-1">
        <span>Save
        </span>
        <CheckIcon className="h-6 inline-block" />
      </div>
    </Button>
      </div>
    </div>
  );
};

export default Output;
