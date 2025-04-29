import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from 'react-redux';

const Header = () => {
  const [loginStatus, setLoginStatus] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  //Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="w-35" src={LOGO_URL} />
      </div>

      <div className="nav-items flex items-center">
        <ul className="nav-list flex p-4 m-4">
          <li className="px-4">onlineStatus: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/cart">Cart-({cartItems.length} items)</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              loginStatus === "Login"
                ? setLoginStatus("Logout")
                : setLoginStatus("Login");
            }}
          >
            {loginStatus}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
