import { useEffect, useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {
  [loginBtnName, setloginBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status : {useOnlineStatus() === true ? "✅" : "🔴"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="login-btn"
              onClick={() => {
                loginBtnName === "Login"
                  ? setloginBtnName("Logout")
                  : setloginBtnName("Login");
              }}
            >
              {loginBtnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
