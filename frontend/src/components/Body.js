import React, { useState, useEffect, useContext } from "react";
import RestaurantContainer from "./RestaurantContainer";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterDataOnClick } from "../utils/helper";
import { FETCH_RESTAURANT } from "../utils/constant";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";
import { FaSearch } from "react-icons/fa";
const Body = () => {
  /*diff ways of writing hooks(array destructuring)
     const [list, setList] = arr;
  const list = arr[0];
  const setList = arr[1];
  */
  const { user, setUser } = useContext(userContext);
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const getRestaurants = async () => {
    try {
      const response = await fetch(FETCH_RESTAURANT);

      const json = await response.json();
      //optional chaining
      const data = json?.data?.cards[2]?.data?.data?.cards;
      console.log(data);
      setRestaurantList(data);
      setFilteredRestaurantList(data);
    } catch (error) {
      throw error;
    }
  };
  console.log("render");

  useEffect(() => {
    getRestaurants();
    console.log("use effect called");
  }, []);

  const isOnline = useOnline();
  console.log(isOnline);

  if (!isOnline) {
    return <h1>🔴 Offline,Please check your internet connection </h1>;
  }

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col  justify-center items-center    space-y-1  w-full min-h-full ">
      <div className="w-full   flex justify-center py-3 ">
        <input
          className="border  border-gray-300 w-64   lg:w-1/5   py-1 "
          type="text"
          placeholder="Search restauarants"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="px-4 bg-red-600  rounded-r-lg   "
          onClick={() => {
            const data = filterDataOnClick(restaurantList, searchText);
            setFilteredRestaurantList(data);
          }}
        >
          <FaSearch className="text-white font-bold " />
        </button>
      </div>
      <div className="flex w-3/4  justify-evenly  px-2 items-baseline flex-wrap space-x-4 space-y-5">
        {filteredRestaurantList.map((card) => (
          <Link to={"/restaurants/" + card.data.id} key={card.data.id}>
            <RestaurantContainer cardData={card} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
