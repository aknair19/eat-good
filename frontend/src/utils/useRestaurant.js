import { useState, useEffect } from "react";
import { FETCH_RESTAURANT_MENU } from "./constant";

// const useRestaurant = (resId) => {
//   const [restaurants, setRestaurants] = useState(null);
//   useEffect(() => {
//     getRestaurantInfo();
//   }, []);

//   const getRestaurantInfo = async () => {
//     const response = await fetch(`${FETCH_RESTAURANT_MENU}${resId}`);
//     const data = await response.json();

//     setRestaurants(data?.data?.cards);
//   };
//   return restaurants;
// };

// export default useRestaurant;

const useFetch = (url, params) => {
  const [isLoading, setIsLoading] = useState(true);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    try {
    
      const fetchData = async () => {
        const data = await fetch(url + params);
        const response = await data.json();
        setApiData(response);
        console.log(response)
      };
      fetchData();
    } catch (error) {
      
      setServerError(error);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  return { apiData, serverError, isLoading };
};
export default useFetch;
