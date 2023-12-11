import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  console.log("Inside Restaurant Card");
  const { resData } = props;
  return (
    <div className="p-4 m-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300">
      <img
        alt="rest-image"
        src={CDN_URL + resData.info.cloudinaryImageId}
        className="rounded-lg"
      />
      <h3 className="py-4 font-bold text-lg">{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} mins</h4>
    </div>
  );
};

//Higher Order Function => Takes a component as an input, enhances it and returns that component

export const withPromotedLabel = (RestaurantCard) => {
  console.log("Inside withPromotedLabel");
  return (props) => {
    return (
      <div>
        <label className="absolute p-2 m-2 bg-black text-white rounded-lg">
          PROMOTED
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
