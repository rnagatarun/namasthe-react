import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData.info;
  return (
    <div className="res-card m-4 p-4 w-[250px] flex-wrap rounded-lg bg-gray-100 hover:bg-gray-200">
      <img className="res-logo rounded-lg" src={CDN_URL+cloudinaryImageId} alt="Food Image" />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} star</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
