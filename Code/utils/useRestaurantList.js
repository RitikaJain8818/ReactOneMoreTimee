import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "./constants";

const useRestaurantList = () => {
  const [resList, setResList] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(RESTAURANT_URL);

    const jsonData = await response.json();
    setResList(jsonData);
  };
  return resList;
};
export default useRestaurantList;
