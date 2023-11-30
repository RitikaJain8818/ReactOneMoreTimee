import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../../utils/useRestaurantList";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  //Whenever React variable updates, react triggeres a reconcillation cycle(re-renders the component)
  console.log("Body Rendered");

  const listOfRestaurants =
    useRestaurantList()?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;

  console.log(listOfRestaurants);

  useEffect(() => {
    setFilteredRestaurants(listOfRestaurants);
    console.log(listOfRestaurants);
  }, [listOfRestaurants]);

  //Conditional Rendering
  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //Filter the restaurant cards and update the UI
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(filteredData);
            setFilteredRestaurants(filteredData);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="rest-container">
        {filteredRestaurants?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
