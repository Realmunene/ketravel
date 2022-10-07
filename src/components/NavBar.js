import React from "react";
import { NavLink } from "react-router-dom";


const linkStyles = {
  display: "inline-block",
  padding: "4px 13px",
  margin: "0 40px",
  background: "maroon",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
        <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "maroon",
        }}
      >
        <img src="./images/mobile_wallpaper18-345.jpg" alt=""/>
      </NavLink>
          <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "maroon",
        }}
      >
        Home
          </NavLink>
          <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "Maroon",
        }}
      >
        About
          </NavLink>
          <NavLink
        to="/contact us"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Contact Us
          </NavLink>
          <NavLink
        to="/login"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Login/Signup
          </NavLink>
    </div>
  );
}

export default NavBar;