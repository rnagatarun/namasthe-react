import RestaurantCard from "./RestaurentCard";
import { useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useRestaurants from "../utils/useRestaurants.js";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const listOfRestaurants = useRestaurants();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // Update filteredRestaurants immediately after listOfRestaurants is fetched
  if (filteredRestaurants.length === 0 && listOfRestaurants.length > 0) {
    setFilteredRestaurants(listOfRestaurants);
  }

  // Conditional rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search by name"
            className="search-box"
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
        <button
          className="filter-btn"
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
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={`restaurants/${restaurant.info.id}`}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
