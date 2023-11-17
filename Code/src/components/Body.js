import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import restList from "../../utils/mockData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            console.log(filteredData);
            setListOfRestaurants(filteredData);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="rest-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
