import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../../utils/useRestaurantList";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  //Whenever React variable updates, react triggeres a reconcillation cycle(re-renders the component)
  console.log("Body Rendered");

  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
  console.log(PromotedRestaurantCard());

  const listOfRestaurants =
    useRestaurantList()?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;

  console.log(listOfRestaurants);

  useEffect(() => {
    console.log("Inside useEffect");
    setFilteredRestaurants(listOfRestaurants);
    console.log(listOfRestaurants);
    console.log("After useEffect");
  }, [listOfRestaurants]);

  const onlineStatus = useOnlineStatus("from Body");
  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline. Please check your internet connection.
      </h1>
    );
  }

  console.log("Within Body");

  //Conditional Rendering
  return !listOfRestaurants || listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="p-4 m-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 m-4 bg-purple-200 rounded-lg"
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
          <button
            className="px-4 py-2 m-4 bg-purple-200 rounded-lg"
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
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.avgRating >= 4.4 ? (
              <PromotedRestaurantCard resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
