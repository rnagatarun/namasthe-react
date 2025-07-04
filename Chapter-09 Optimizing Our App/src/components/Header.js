import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginStatus, setLoginStatus] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul className="nav-list">
          <li>onlineStatus: {onlineStatus? "🟢" : "🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <button
            className="login"
            onClick={() => {
                loginStatus === "Login"
                  ? setLoginStatus("Logout")
                  : setLoginStatus("Login")
              }
            }
          >
            {loginStatus}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
