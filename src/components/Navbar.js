import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = ({ total }) => {
  return (
    <nav className="navBar">
      <div>
        <h1>Cats</h1>
        <h2>{total}</h2>
        <i class="fas fa-paw fa-5x"></i>
      </div>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <Link to="/selectCat">
        <h1>Choose Cat</h1>
      </Link>

      <Link to="/Favourites">
        <h1>Favourites</h1>
      </Link>
      <Link to="/myFavourites">
        <h1>My Favourites</h1>
      </Link>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    total: state.calc.total,
  };
};

export default connect(mapStateToProps)(Navbar);
