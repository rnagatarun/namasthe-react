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

//Higher Order Component
// input - Restaurant Card ==> OfferedRestaurantCard

export const withOfferLabel = (RestaurantCard) => {
  return (props) =>{
    const { header } = props.resData.info.aggregatedDiscountInfoV3;
    return(
      <div className="relative">
      <label className="absolute bg-black px-2 py-1 text-white rounded-lg">{header}</label>
      <RestaurantCard {...props}/>
      </div>
    );
  }

}

export default RestaurantCard;
