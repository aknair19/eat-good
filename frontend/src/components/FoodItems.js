import React from "react";
import { IMG_URL } from "../utils/constant";

const FoodItems = ({ imageId, name, description }) => {
  return (
    <div className=" container  flex flex-col  w-fit max-w-sm  ">
      <img className="w-12 h-12  text-xs" src={`${IMG_URL}${imageId}`} alt={name} />
      <div>
        <h3 className="font-bold">{name}</h3>
        <div>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodItems;
