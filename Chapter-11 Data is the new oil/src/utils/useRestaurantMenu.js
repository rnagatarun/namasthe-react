import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState();

//fetch data
useEffect(() =>{
    fetchData();
}, []);

const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
    // console.log("Menu data", json);
  };

    return resInfo;
}

export default useRestaurantMenu;