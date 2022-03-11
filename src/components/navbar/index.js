import React from "react";

import Logo from "../../assets/logo.png";
import CartIcon from "../../assets/bin.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./navbar.css";      
const Index = () => {
  return (
    <div className="parent bg-purple-500">
      <a href="#" ><h1 className="logo text-white">SmallChops</h1></a>
      {/* <img alt="logo" src={Logo} className="logo" /> */}

      <div className="link-box">
        <a className="links" href="#">
          Packages
        </a>
        <a className="links" href="#">
          Event
        </a>
        <a className="links" href="#">
          Corporate
        </a>
        <a className="links" href="#">
          Contact
        </a>
      </div>

      <div className="login">
        <button className="btn">Sign In</button>
        {/* <img alt="cart" src={CartIcon} className="cart-icon" /> */}
        <a className="links" href="#">
        <ShoppingCartIcon sx={{color:"white", width: "35px", height:"35px", marginLeft: "20px"}} />
        </a>
      </div>
    </div>
  );
};



export default Index;
