import { useState, useEffect } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  console.log("Inside useRestaurantMenu");
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  useEffect(() => {
    console.log("Inside useRestaurantMenu useEffect");
    fetchData();
    console.log("After Fetch Data", restaurantInfo);
  }, []);

  fetchData = async () => {
    const response = await fetch(MENU_URL + resId);
    const json = await response.json();
    setRestaurantInfo(json.data);
    setRestaurantInfo(json.data);
    console.log("Inside Fetch Data", restaurantInfo);
  };
  console.log("Outside Fetch Data", restaurantInfo);
  return restaurantInfo;
};
export default useRestaurantMenu;
