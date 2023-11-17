import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div
      className="rest-card"
      style={{
        backgroundColor: "lavender",
      }}
    >
      <img
        alt="rest-image"
        src={CDN_URL + resData.info.cloudinaryImageId}
        className="rest-img"
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
