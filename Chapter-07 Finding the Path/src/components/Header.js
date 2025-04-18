import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [loginStatus, setLoginStatus] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul className="nav-list">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
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
