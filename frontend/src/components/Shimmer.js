import React from "react";
import { ImSpinner } from 'react-icons/im';
const Shimmer = () => {
  return (
    <div className=" h-screen w-screen bg-gray-100 flex justify-center items-center">
      <div className="">
     <ImSpinner className="text-8xl text-red-600 animate-spin  text-center "/>
    </div>
    </div>
  );
};

export default Shimmer;
