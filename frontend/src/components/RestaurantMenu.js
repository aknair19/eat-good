import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_URL } from "../utils/constant";
import useFetch from "../utils/useRestaurant";
import { FETCH_RESTAURANT_MENU } from "../utils/constant";
import Shimmer from "./Shimmer";

import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";


const RestaurantMenu = () => {

  const { resId } = useParams();

  const { apiData, serverError, isLoading } = useFetch(
    FETCH_RESTAURANT_MENU,
    resId
  );

  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);


   

  const addItemHandler = (item) => {
    dispatch(addItem(item));
  };

  const deleteItemHandler = (item) => {
    console.log(item);
    dispatch(removeItem(item));
  };

  if(apiData===null) return <Shimmer/>;

  const {
    name,
    cloudinaryImageId,
    areaName,

    avgRating,

    cuisines,
    areaPostalCode,
  } = apiData?.data?.cards[0]?.card?.card?.info;

  const restaurantItemsList =
    apiData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(
      (item) => ({ ...item.card.info, inCart: 0 })
    );

  const getPerItemQty = (itemId) => {
    const itemQty = cartItems.find((cartItem) => cartItem.id === itemId);
    if (itemQty) {
      return itemQty.inCart;
    } else {
      return null;
    }
  };

  return  (
    <div className="flex flex-col w-screen items-center justify-center space-y-2 p-2 px-5 mt-6  ">
      <div className="flex flex-col space-x-2 justify-center items-center w-3/4">
        <div>
          <img
            src={IMG_URL + cloudinaryImageId}
            alt="logo"
            className="h-48 w-64 border-2 rounded-xl shadow-inner"
          />
        </div>
        <ul className="flex flex-col justify-center items-center ">
          <li className="text-2xl font-semibold">{name}</li>
          <li className="text-sm text-gray-600 font-thin">
            {cuisines.join(", ")}
          </li>
          <li className="text-sm font-thin text-gray-600">
            {areaName}, {areaPostalCode}
          </li>
          <li className="text-sm font-thin text-green-600">
            {avgRating} stars ||100+ ratings{" "}
          </li>
        </ul>
      </div>
      <h3 className="p-1 border-dashed border-b-2 border-b-gray-300   text-lg font-semibold ">
        Menu
      </h3>

      <div className="flex flex-col     md:w-3/4">
        {restaurantItemsList?.map((item) => {
          return (
            <div
              key={item?.id}
              className="flex  items-start p-3 border-t border-t-gray-300"
            >
              <div className="w-2/3 flex flex-col">
                <h1 className="text-md font-semibold">{item?.name}</h1>
                <p className="text-md font-semibold">
                  ₹ {item?.price ? item?.price / 100 : 99}
                </p>
                <p className="mt-1 text-gray-500 text-sm ">
                  {item?.description}
                </p>
              </div>
              <div className="flex flex-col items-center w-1/3">
                <img
                  src={IMG_URL + item.imageId}
                  alt={item?.name}
                  className="bg-gray-300 rounded-lg w-48  h-28 text-xs font-thin"
                />
                <div className="flex  w-[118] text-green-800 mt-1 border-2 text-center">
                  <button
                    onClick={() => deleteItemHandler(item)}
                    className="text-md text-gray-800 font-extrabold px-3"
                  >
                    -
                  </button>
                  <span className="text-md font-semibold">
                    {getPerItemQty(item?.id) ? getPerItemQty(item?.id) : 0}
                  </span>
                  <button
                    onClick={() => addItemHandler(item)}
                    className="text-md text-gray-800 font-extrabold px-3"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
