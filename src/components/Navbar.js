import React from "react";

import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navBar">
      <Link to="/">
        <i className="fas fa-paw fa-5x"></i>
      </Link>
      <Link to="/choose">
        <h1>Choose</h1>
      </Link>
      <Link to="/myfavourites">
        <h1>MyFavourites</h1>
      </Link>
    </nav>
  );
};

export default Navbar;
