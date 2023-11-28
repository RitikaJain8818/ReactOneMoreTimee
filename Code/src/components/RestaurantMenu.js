import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantInfo = useRestaurantMenu(resId);

  if (restaurantInfo === null) return <Shimmer />;
  const {
    name,
    avgRatingString,
    cuisines,
    areaName,
    cloudinaryImageId,
    costForTwo,
  } = restaurantInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div className="res-details">
      <div className="res-info">
        <div className="res-top-heading">
          <h1 className="res-name">{name}</h1>
          <div className="res-rating">
            <h4>{avgRatingString}</h4>
          </div>
        </div>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{areaName}</h4>
        <h3>₹{costForTwo / 100} FOR TWO</h3>
      </div>
      <div className="res-menu">
        <h2>Menu</h2>
        <ul>
          {itemCards?.map((item) => (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} - ₹
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
