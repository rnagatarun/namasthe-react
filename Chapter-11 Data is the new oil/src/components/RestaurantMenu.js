import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  const handleSetShowIndex = (index) => {
    // Toggle the accordion: collapse if the same index is clicked
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  // console.log("Restaurant ID:", resId);

  const { name, cuisines, costForTwo } =
    resInfo?.cards[2]?.card?.card?.info ?? {};

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  // const itemCards =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card ?? {};
  // console.log(itemCards);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines?.join(", ")} - {costForTwo / 100}
      </p>

      {categories?.length > 0 &&
        categories.map((category, index) => (
          <RestaurantCategory
            key={category.card?.card?.title || index}
            data={category.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => handleSetShowIndex(index)}
          />
        ))}
    </div>
  );
};

export default RestaurantMenu;
