import { CDN_URL } from "../utils/constants";
import "../index.css"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
          <li><Link to ="/about">About Us</Link></li>
          <li><Link to ="/">Home</Link></li>
          <li><Link to ="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <button className="login" onClick={()=> {btnState === "login"?setBtnState("logout"):setBtnState("login")}}>{btnState}</button>
        </ul>
      </div>
    </div>
      )
}

export default Header;