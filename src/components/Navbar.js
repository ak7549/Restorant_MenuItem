import React from "react";
import "../style/Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../assests/logo.png"



function Navbar() {
  return (
    <div className="navbarMain">
      <div className="navbar">
        <div className="left">
          <img className="logo" src={Logo} alt="" />
       
        </div>
        <div className="right">
          <ul>
            <li><Link to="/" className="navList">Home </Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li> <Link to="/menu">Menu</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li> <Link to="login">Login</Link></li>
          </ul>
          
         
         
         
        </div>
      </div>
    </div>
  );
}

export default Navbar;
