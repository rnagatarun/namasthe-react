import { useState } from "react";
import Itemlist from "./Itemlist";

const RestaurantCategory = ({ data }) => {
    const [showItems, setShowItems] = useState(false);
    const handleClick = () => {
        setShowItems(!showItems);
    }
  return (
    <div>
      {/* Accordin Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="cursor-pointer">⬇️</span>
        </div>

        {/* Accordin Body */}
        <div>
          {showItems &&  <Itemlist items={data.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
