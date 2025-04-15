import RestaurantCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9371531&lng=77.6901166&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log("Json data", json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Conditional rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" placeholder="Search" className="search-box" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
          <button onClick={() => {
            const filteredListOfRestaurants = listOfRestaurants.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestaurants(filteredListOfRestaurants);
          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredListOfRestaurants = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.1
            );
            setListOfRestaurants(filteredListOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
