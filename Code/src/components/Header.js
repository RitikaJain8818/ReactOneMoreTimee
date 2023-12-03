import { useEffect, useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {
  [loginBtnName, setloginBtnName] = useState("Login");

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div>
        <img className="w-56" alt="logo" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status : {useOnlineStatus() === true ? "✅" : "🔴"}
          </li>
          <li className="px-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-4">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="px-4">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="px-4">Cart</li>
          <li className="px-4">
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
