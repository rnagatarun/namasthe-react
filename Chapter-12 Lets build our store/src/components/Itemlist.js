import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const Itemlist = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //Dispatch an action
    dispatch(addItem(item)); 
  }

  return (
    <div>
      {items?.length > 0 ? (
        items.map((item) => (
          <div
            key={item.card.info.id}
            className="m-2 p-2 border-gray-200 border-b-2"
          >
            <div className="menu-item flex justify-between items-center">
              <div className="menu-item-content text-left w-3/4">
                <div className="py-2">
                  <span>{item.card.info.name}</span>
                  <span>
                    {" "}
                    - ₹{" "}
                    {item.card.info.price
                      ? item.card.info.price / 100
                      : item.card.info.defaultPrice / 100}
                  </span>
                  <p className="text-xs text-justify mt-1">
                    {item.card.info.description}
                  </p>
                </div>
              </div>
              <div className="image">
                <div className="absolute">
                  <button
                    className="p-1 mx-6 rounded-lg bg-black text-white shadow-lg cursor-pointer"
                    onClick={() => handleAddItem(item)}
                  >
                    Add +
                  </button>
                </div>
                <img
                  className="menu-item-image w-24 h-24 object-cover rounded-lg"
                  src={
                    item.card.info.imageId
                      ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`
                      : "https://via.placeholder.com/300x300"
                  }
                  alt={item.card.info.name || "Menu item"}
                />
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No items available</p>
      )}
    </div>
  );
};

export default Itemlist;
