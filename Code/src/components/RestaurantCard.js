import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="p-4 m-4 w-[250px] rounded-lg">
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

export default RestaurantCard;
