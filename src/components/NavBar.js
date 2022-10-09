import React from "react";
import { NavLink } from "react-router-dom";

// a variable to store the css style internally
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
        to="/ourPackage"
        exact
        style={linkStyles}
        activeStyle={{
          background: "maroon",
        }}
      >
        KeTravel.
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
        to="/contactus"
        exact
        style={linkStyles}
        activeStyle={{
          background: "Maroon",
        }}
      >
        Contact Us
          </NavLink>
          <NavLink
        to="/login"
        exact
        style={linkStyles}
        activeStyle={{
          background: "Maroon",
        }}
      >
        Login/Signup
          </NavLink>
    </div>
  );
}

export default NavBar;