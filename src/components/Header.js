import { CDN_URL } from "../utils/constants";
import "../index.css"
import { useState } from "react";
const Header = () => {
  const [btnState, setBtnState] = useState("login");
  console.log("btnState", btnState);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={CDN_URL}/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login" onClick={()=> {btnState === "login"?setBtnState("logout"):setBtnState("login")}}>{btnState}</button>
        </ul>
      </div>
    </div>
      )
}

export default Header;