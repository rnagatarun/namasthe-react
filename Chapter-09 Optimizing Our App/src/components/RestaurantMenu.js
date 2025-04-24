import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import "./RestaurantMenu.css";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  // console.log("Restaurant ID:", resId);

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info ?? {};

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card ?? {};
  console.log(itemCards);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h2>Menu</h2>
      <h3>{name}</h3>
      <ul>
        {itemCards?.itemCards?.length > 0 ? (
          itemCards.itemCards.map((item) => (
            <li key={item.card.info.id}>
              <div className="menu-item">
                <div className="menu-item-content">
                  <h3>{item.card.info.name}</h3>
                  <span>₹{item.card.info.price / 100}</span>
                  <p>{item.card.info.description}</p>
                </div>
                <img
                  src={
                    item.card.info.imageId
                      ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`
                      : "https://via.placeholder.com/300x300"
                  }
                  alt={item.card.info.name || "Menu item"}
                  className="menu-item-image"
                />
              </div>
            </li>
          ))
        ) : (
          <p>No items available</p>
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
