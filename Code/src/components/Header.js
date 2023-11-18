import { useEffect, useState } from "react";
import { LOGO_URL } from "../../utils/constants";

const Header = () => {
  [loginBtnName, setloginBtnName] = useState("Login");

  useEffect(() => {
    console.log("useEffect called");
  }, [loginBtnName]);

  console.log("Header rendered");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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
