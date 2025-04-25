import RestaurantCard, { withOfferLabel } from "./RestaurentCard";
import { useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useRestaurants from "../utils/useRestaurants.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const listOfRestaurants = useRestaurants();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const onlineStatus = useOnlineStatus();

  const RestaurantCardWithOffer = withOfferLabel(RestaurantCard);

  // Update filteredRestaurants immediately after listOfRestaurants is fetched
  if (filteredRestaurants.length === 0 && listOfRestaurants.length > 0) {
    setFilteredRestaurants(listOfRestaurants);
  }

  if (onlineStatus === false) {
    return (
      <h1>
        You are Offline. Please check your internet connection and Try Again!
      </h1>
    );
  }

  // Conditional rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search">
          <input
            type="text"
            placeholder="Search by name"
            className="search-box m-4 p-1 border border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              const filteredListOfRestaurants = listOfRestaurants.filter(
                (restaurant) =>
                  restaurant.info.name
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
              );
              setFilteredRestaurants(filteredListOfRestaurants);
            }}
          />
        </div>

        <div>
          <button
            className="filter-btn p-2 m-3 bg-green-200 rounded-lg cursor-pointer"
            onClick={() => {
              const filteredListOfRestaurants = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.1
              );
              setFilteredRestaurants(filteredListOfRestaurants);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap ">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={`restaurants/${restaurant.info.id}`}
            >
              {/** If the restaurant provides discounts add a discount label to it */}

              {restaurant.info.aggregatedDiscountInfoV3.header ? (
                <RestaurantCardWithOffer resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
