import { IMG_URL } from "../utils/constant";
import { useContext } from "react";
import {  FaStar} from 'react-icons/fa';
const RestaurantContainer = ({ cardData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime,costForTwo } =
    cardData.data;
// const {user}=useContext(userContext)
  return (
    <div className="  container  flex flex-col rounded-md w-64 h-60 hover:shadow-md shadow-inner  ">
      <img className="w-full h-[8rem] " alt="menu-item" src={`${IMG_URL}/${cloudinaryImageId}`} />
      <div className="flex flex-col justify-evenly">
        <h3 className="font-semibold text-sm">{name}</h3>
        <p className="text-xs text-gray-500">{cuisines.join(", ")}</p>
        <div className=" flex justify-between ">

          <div className="flex items-center justify-center space-x-[1px] rounded bg-green-500  p-[1px]">
          <FaStar className="text-white text-sm"/>
          <div className="text-xs text-white font-medium">{avgRating}</div> 
          </div>
      <p className="text-xs font-semibold" >{deliveryTime} min</p>
      <p className="text-xs font-semibold">₹ {costForTwo/100} FOR TWO</p>
         
          
        </div>
      </div>
    </div>
  );
};

export default RestaurantContainer;
