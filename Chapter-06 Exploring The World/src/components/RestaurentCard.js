import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData.data;
  return (
    <div className="res-card" style={{ backgroundColor: "lightgray" }}>
      <img className="res-logo" src={CDN_URL+cloudinaryImageId} alt="Food Image" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo / 100}</h4>
    </div>
  );
};

export default RestaurantCard;
